const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fileUpload = require("express-fileupload");
const fileSystem = require("fs");
const mime = require("mime");
//This function creates project
exports.create = async (req, res) => {
  let members = req.body.members;
  let memberData = [];

  try {
    await Promise.all(
      members.map(async (email) => {
        const result = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        memberData = [...memberData, { userId: result.userId }];
      })
    );
    let data = {
      ...req.body,
      deadline: new Date(req.body.deadline),
      members: { connect: memberData },
    };
    const dbResp = await prisma.project.create({
      data: data,
    });
    return res.send(dbResp);
  } catch (error) {
    return res.send(error);
  }
};

exports.getProject = async (req, res) => {
  const data = await prisma.project.findMany({
    where: {
      visibility: "public",
    },
    include: {
      members: {
        select: {
          userId: true,
          name: true,
          email: true,
          accountType: true,
        },
      },
    },
  });
  res.send(data);
};

exports.getIndividualProject = async (req, res) => {
  const data = await prisma.project.findUnique({
    where: {
      projectId: req.params.projectId,
    },
    include: {
      members: {
        select: {
          userId: true,
          name: true,
          email: true,
          accountType: true,
        },
      },
    },
  });
  res.status(200).send(data);
};

exports.getTasks = async (req, res) => {
  const data = await prisma.task.findMany({
    where: {
      projectId: req.params.projectId,
    },
  });
  res.send(data);
};

exports.addTask = async (req, res) => {
  const data = {
    ...req.body,
    deadline: new Date(req.body.deadline),
    projectId: req.params.projectId,
  };
  try {
    const result = await prisma.task.create({
      data: data,
    });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

exports.updateTask = async (req, res) => {
  const response = await prisma.task.update({
    where: {
      taskId: req.params.taskid,
    },
    data: req.body,
  });
  console.log(response);
};

exports.fileupload = async (req, res) => {
  if (req.files) {
    const file = req.files.file;
    console.log(file);
    const filePath = "./uploads/" + file.name;
    file.mv(filePath, (err) => {
      if (err) {
        res.send(err);
      }
    });
    if (
      file.mimetype ==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      file.mimetype = "docx";
    } else if (
      file.mimetype ==
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      file.mimetype = "xlsx/excel";
    }
    try {
      const result = await prisma.file.create({
        data: {
          fileName: file.name,
          filePath: filePath,
          fileType: file.mimetype,
          projectId: req.params.projectId,
          authorId: "avinav-400",
          fileSize: file.size,
        },
      });
      res.status(200).send(result);
    } catch (error) {
      res.send(error);
    }
  }
};

exports.getFiles = async (req, res) => {
  const result = await prisma.file.findMany();
  res.status(200).send(result);
};

exports.fileAction = async (req, res) => {
  const result = await prisma.file.findUnique({
    where: {
      fileId: req.params.fileId,
    },
  });
  let filePath = result.filePath;
  let file = fileSystem.createReadStream(filePath);
  res.writeHead(200, {
    "Content-Type": mime.getType(filePath),
    "Content-Disposition": `${result.fileName}`,
  });
  file.pipe(res);
};
exports.checkEmail = async (req, res) => {
  const result = await prisma.user.findUnique({
    where: {
      email: req.params.email,
    },
  });

  if (result) {
    res.status(200).send({
      message: "Email exists",
    });
  } else {
    res.status(404).send({
      message: "User with that mail does not exist",
    });
  }
};

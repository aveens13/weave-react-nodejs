const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fileUpload = require("express-fileupload");

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
      userId: "avinav-400",
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

exports.fileupload = (req, res) => {
  if (req.files) {
    const file = req.files.file;
    file.mv("./uploads/" + file.name, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).json({
          name: file.name,
        });
      }
    });
  }
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

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fileUpload = require("express-fileupload");
exports.create = async (req, res) => {
  const memberData = req.body.members;
  let data = req.body;
  data = {
    ...data,
    deadline: new Date("1993-04-22T00:00:00Z"),
    members: { connect: memberData },
  };
  const result = await prisma.project.create({
    data: data,
  });
  res.send(result);
};

exports.getProject = async (req, res) => {
  const data = await prisma.project.findMany({
    include: {
      members: true,
    },
  });
  res.send(data);
  data.map((dats) => {
    dats.members.map((name) => {
      console.log(name.email);
    });
  });
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

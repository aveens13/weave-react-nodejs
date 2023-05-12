const fileSystem = require("fs");
const mime = require("mime");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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
          authorId: "2ccbb928-e4d2-499e-ae2a-c9a2de0d7903",
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

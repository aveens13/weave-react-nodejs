const { Router } = require("express");
const projects = require("../lib/projects.js");
const fileUpload = require("express-fileupload");
const router = Router();

router.post("/api/create-project", projects.create);
router.get("/api/project", projects.getProject);
router.post(
  "/api/fileupload",
  fileUpload({ createParentPath: true }),
  projects.fileupload
);
router.get("/api/checkmail/:email", projects.checkEmail);
router.get("/api/project/:projectId", projects.getIndividualProject);
router.get("/api/tasks/:projectId", projects.getTasks);
router.post("/api/task/:projectId", projects.addTask);
router.post("/api/updatetask/:taskid", projects.updateTask);
module.exports = router;

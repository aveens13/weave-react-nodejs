const { Router } = require("express");
const projects = require("../controllers/projects.js");
const file = require("../controllers/file.js");
const logsheet = require("../controllers/logsheet.js");
const fileUpload = require("express-fileupload");
const router = Router();

router.post("/api/create-project", projects.create);
router.get("/api/checkmail/:email", projects.checkEmail); //Checks mail when adding user to the project
router.get("/api/project", projects.getProject);
router.get("/api/project/:userId", projects.getProjectusingMember);
router.get("/api/projectinfo/:projectId", projects.getIndividualProject);
router.get("/api/getuserinfo/:userId", projects.getUserInfo);

//File Actions
//Router to upload files
router.post(
  "/api/fileupload/:projectId",
  fileUpload({ createParentPath: true }),
  file.fileupload
);
router.get("/api/files/:projectId", file.getFiles);
router.get("/api/file/:fileId", file.fileAction);

//Task Actions
router.get("/api/tasks/:projectId", projects.getTasks);
router.post("/api/task/:projectId", projects.addTask);
router.post("/api/updatetask/:taskid", projects.updateTask);
router.get("/api/logsheet", logsheet.logsheet);
module.exports = router;

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
module.exports = router;

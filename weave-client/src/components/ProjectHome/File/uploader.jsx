import { useState } from "react";
import "./uploader.css";
export default function Uploader({ close }) {
  const [file, setFile] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  async function fileUpload(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    const projectId = "04b274b2-5706-4904-b101-bef4875807ef";
    const response = await fetch(
      `http://localhost:8000/api/fileupload/${projectId}`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      response.json().then((e) => {
        console.log(e);
        close();
      });
    }
  }
  return (
    <div className="container">
      <div className="card">
        <h3>Upload Files</h3>
        <div className="drop_box">
          <header>
            <h4>Select File here</h4>
          </header>
          <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
          <form>
            <input
              type="file"
              accept=".doc,.docx,.pdf,.xlsx,image/png,image/jpeg,image/jpg"
              id="fileID"
              onChange={handleChange}
            />
            <button className="btn" onClick={fileUpload}>
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

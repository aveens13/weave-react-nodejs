import "./createproject.css";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Member from "./Member";
export default function CreateProject() {
  const [members, setMembers] = useState([]);
  const [email, setEmail] = useState("");
  function handleAddmember(event) {
    event.preventDefault();
    if (email != "") {
      setMembers((prev) => {
        return [...prev, email];
      });
    }
  }

  useEffect(() => {
    console.log(members);
  }, [members]);

  function handleaddEmail(event) {
    setEmail(event.target.value);
  }
  return (
    <div className="create_projects_main">
      <div className="project_card">
        <form>
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            name="Title"
            id="Title"
            placeholder="Project Title"
          />
          <div className="deadline_section">
            <div className="date">
              <label htmlFor="date">Deadline</label>
              <input type="date" name="date" id="date" />
            </div>
            <div className="tags">
              <label htmlFor="tags">Tags</label>
              <input
                type="text"
                name="tags"
                id="tags"
                placeholder="nodejs, python"
              />
            </div>
          </div>
          <p className="gray">
            Input tags to make your project visible with related contents.
          </p>
          <label htmlFor="organization">Choose your Organization </label>

          <input
            type="text"
            name="organization"
            id="organization"
            placeholder="Organization Name"
          />
          <p className="gray">* Leave it blank if this is personal project</p>
          <label htmlFor="add-members">Add members</label>
          <input
            type="email"
            id="add-members"
            name="add-members"
            placeholder="Member email"
            onChange={handleaddEmail}
          ></input>
          <button
            className={
              members.length === 0 ? "add-button" : "add-button update"
            }
            onClick={handleAddmember}
          >
            <AddIcon fontSize="1rem" /> Add
          </button>
          <ul className="member-card">
            {members.map((member) => (
              <Member member={member} />
            ))}
          </ul>
          <div className="create-button">
            <input type="submit" value="Create" />
          </div>
        </form>
      </div>
    </div>
  );
}

import "./createproject.css";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Member from "./Member";
export default function CreateProject() {
  const [members, setMembers] = useState([]);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  function handleAddmember(event) {
    event.preventDefault();
    fetch(`/api/checkmail/${email}`).then((response) => {
      if (response.ok) {
        response.json().then((e) => {
          setError(false);
          setMembers((prev) => {
            return [...prev, email];
          });
        });
      } else {
        setError(true);
      }
    });
  }

  useEffect(() => {
    console.log(members);
  }, [members]);

  function handleaddEmail(event) {
    setEmail(event.target.value);
  }

  //Handle the cross button on the member
  function handleCross(id) {
    setMembers((prev) => {
      return prev.filter((email) => {
        return email != id;
      });
    });
  }
  // Handle the form
  const handleForm = async (event) => {
    console.log("called");
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    let circulartoPlain = Object.fromEntries(formData);
    circulartoPlain = { ...circulartoPlain, members: members };
    const formDataJsonString = JSON.stringify(circulartoPlain);

    const response = await fetch("http://localhost:8000/api/create-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formDataJsonString,
    });
    console.log(response);
  };
  return (
    <div className="create_projects_main">
      <div className="project_card">
        <form onSubmit={handleForm}>
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            name="projectTitle"
            id="Title"
            placeholder="Project Title"
          />
          <div className="deadline_section">
            <div className="date">
              <label htmlFor="date">Deadline</label>
              <input type="date" name="deadline" id="date" />
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
            name="members"
            placeholder="Member email"
            onChange={handleaddEmail}
          ></input>
          <button
            className={
              members.length === 0 && !error
                ? "add-button"
                : "add-button update"
            }
            onClick={handleAddmember}
          >
            <AddIcon fontSize="1rem" /> Add
          </button>
          <p className={error ? "email-error" : "email"}>
            User with that mail does not exist
          </p>
          <ul className="member-card">
            {members.map((member) => (
              <Member member={member} handleCross={handleCross} />
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

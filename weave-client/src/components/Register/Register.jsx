import org from "../../assets/org.jpg";
import "./register.css";
export default function Register() {
  return (
    <>
      <div className="registration-main">
        <div className="registration-card">
          <div className="image-section">
            <img src={org} alt="" />
          </div>
          <div className="form-section">
            <div className="top-section">
              <h2>Register an organization to Weave</h2>
              <p className="grey">
                Bundle up the projects under your organization in one place.
              </p>
            </div>
            <form action="">
              <label htmlFor="name">Name of your Organization</label>
              <input
                type="text"
                name="orgName"
                placeholder="e.g Kathmandu University"
              />
              <label htmlFor="name">Your Email</label>
              <input
                type="email"
                name="personalmail"
                placeholder="e.g hari@gmail.com"
              />
              {/* <label htmlFor="type">Organization Type</label>
              <select name="orgType" id="type">
                <option value="University"></option>
                <option value="College"></option>
                <option value="High School"></option>
              </select> */}
              <label htmlFor="address">Address</label>
              <input type="text" name="orgAdd" placeholder="Dhulikhel" />
              <label htmlFor="mail">Organization mail suffix</label>
              <input type="text" name="orgMail" placeholder="e.g @ku.edu.np" />
              <div className="submitbtn">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

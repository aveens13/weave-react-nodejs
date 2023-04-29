import { Link } from "react-router-dom";
import "./login.css";
import Google from "../../assets/google.svg";
export default function Signup() {
  return (
    <>
      <div className="login-registration-form">
        <div className="loginSection">
          <div className="login-card signup">
            <div className="top-section">
              <div>
                <h2>Welcome to Weave</h2>
              </div>
              <div className="grey">Manage your creative space</div>
            </div>
            <div className="signin-options">
              <div className="button-div">
                <img src={Google} alt="Google Logo" />
                <div className="text-button">Contine with google</div>
              </div>
            </div>
            <div className="grey">or</div>
            <div className="login-form">
              <form action="">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Hari Sharma"
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="login-email"
                  id=""
                  placeholder="user@gmail.com"
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="login-password"
                  id=""
                  placeholder="********"
                />
                <div className="accountType">
                  <h4>Account Type</h4>
                  <div className="types">
                    <input
                      type="radio"
                      value="Personal"
                      name="accounttype"
                      checked
                      id="Personal"
                    />
                    <label htmlFor="Personal">Personal</label>
                    <input
                      type="radio"
                      value="Supervisor"
                      name="accounttype"
                      id="Supervisor"
                    />
                    <label htmlFor="Supervisor">Supervisor</label>
                  </div>
                </div>
                <div className="submitbutton">
                  <input
                    className="submitBtn"
                    type="submit"
                    value="Signup"
                  ></input>
                </div>
              </form>
            </div>
            <p className="grey">
              Already have an account?
              <b>
                <Link to="/login/user">Login</Link>
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

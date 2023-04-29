import { Link } from "react-router-dom";
import "./login.css";
import Google from "../../assets/google.svg";
import { Close } from "@mui/icons-material";
export default function Login() {
  return (
    <div className="login-registration-form">
      <div className="loginSection">
        <div className="login-card">
          <div className="top-section">
            <div>
              <h2>Sign in to start Weaving again</h2>
            </div>
            <div className="grey">Manage your creative space</div>
          </div>
          <div className="signin-options">
            <div className="button-div">
              <img src={Google} alt="Google Logo" />
              <div className="text-button">Sign in with google</div>
            </div>
          </div>
          <div className="grey">or</div>
          <div className="login-form">
            <form className="my-form">
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
              <div className="submitbutton">
                <input
                  className="submitBtn"
                  type="submit"
                  value="Login"
                ></input>
              </div>
            </form>
          </div>
          <p className="grey">
            Don't have an account?{" "}
            <b>
              <Link to="/sign-up">Signup</Link>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

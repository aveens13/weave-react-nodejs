import { Link } from "react-router-dom";
import weaveIcon from '../assets/weave-logo.png'
export default function Login(){
    return(
        <div className="login-registration-form">
            <div className="loginSection">
                <div className="login-card">
                    <div className="logo"><img src={weaveIcon} alt="" /></div>
                    <div className="login-form">
                        <form action="">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="login-email" id="" placeholder="user@gmail.com"/>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="login-password" id="" placeholder="********"/>
                            <input className="submitBtn" type="submit" value="Login"></input>
                        </form>
                    </div>
                    <div className="link-section">
                        <Link to="/sign-up">Signup</Link>
                        <Link to="/sign-up">Forgot Password</Link>
                    </div>
                </div>
            </div>
            <div className="registerSection">
                
            </div>
        </div>
    )
}
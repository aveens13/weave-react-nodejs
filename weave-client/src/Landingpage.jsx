import { Link } from "react-router-dom";

export default function Landingpage(){
    return(
        <>
            <div className="landingNav">
            <Link to='/login'><button>Login</button></Link>
            </div>
        </>
    )
}
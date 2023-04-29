import { Link } from "react-router-dom";

export default function Landingpage() {
  return (
    <>
      <div className="landingNav">
        <Link to="/login/user">
          <button>Login as user</button>
        </Link>
        <Link to="/login/organization">
          <button>Login as organization</button>
        </Link>
      </div>
    </>
  );
}

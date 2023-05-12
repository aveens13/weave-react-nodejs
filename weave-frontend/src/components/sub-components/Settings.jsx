import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
export default function Settings() {
  const navigate = useNavigate();
  function handleLogout() {
    fetch("/api/v1/user/logout", {
      method: "POST",
    }).then((result) => {
      if (result.ok) {
        navigate("/");
        window.location.reload(true);
        result.json().then((e) => {
          console.log(e.message);
        });
      }
    });
  }
  return (
    <div className="settings">
      <ul>
        <li
          onClick={() => {
            handleLogout();
          }}
        >
          <p>Logout</p>
          <LogoutIcon />
        </li>
      </ul>
    </div>
  );
}

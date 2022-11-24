import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import '../CSS/Login.css';

function ForgotReq() {
  let navigate = useNavigate();

  let handleLogin = async () => {
    navigate("/loginBefore");
  };

  return (
    <div className ="wallpaper1">
      <div className="login-wrapper">
        <h1>Request status</h1>
        <p>request sent successfully</p>
      </div>
      <div className="verti">
      <Button variant="primary" onClick={() => handleLogin()}>
        Back
      </Button>
      </div>
    </div>
  );
}

export default ForgotReq;

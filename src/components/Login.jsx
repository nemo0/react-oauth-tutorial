import { useNavigate } from "react-router-dom";
import { Descope } from "@descope/react-sdk";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="root">
      <div>
        <h1>Log in with Descope</h1>
        <div className="btn-container">
          <Descope
            flowId="sign-up-or-in"
            theme="light"
            onSuccess={(e) => {
              console.log(e.detail.user.name);
              console.log(e.detail.user.email);
              navigate("/secure");
            }}
            onError={(err) => {
              console.log("Error!", err);
              alert("Error: " + err.detail.message);
            }}
          />
        </div>
      </div>
    </div>
  );
}

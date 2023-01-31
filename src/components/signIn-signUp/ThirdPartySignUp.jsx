import "./forms.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

export default function ThirdPartySignUp() {
  return (
    <div className="third-party-container">
      <button className="google-signup">
        <FcGoogle className="google-icon" />
        Sign up with Google
      </button>
      <button className="facebook-signup">
        <BsFacebook className="fb-icon" />
        Sign up with Facebook
      </button>
    </div>
  );
}

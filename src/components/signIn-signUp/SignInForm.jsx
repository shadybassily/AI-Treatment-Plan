import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userSignIn } from "../../store/userSlice";
import AnimatingBtn from "../animating-btn/AnimatingBtn";
import ThirdPartySignUp from "./ThirdPartySignUp";

export default function SignInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  //if the user is authenticated, redirect them to generate plan
  useEffect(() => {
    if (user.isAuth) {
      navigate("/generate-plan");
    }
  });


  //no restrictions for the sign in form 
  // just implementing the functionality of login and logout
  const handleSignIn = (e) => {
    e.preventDefault()
    dispatch(userSignIn("hehe@hehe.com"));
    navigate("/generate-plan")
  };

  const fields = [
    {
      label: "Email",
      placeholder: "Ex: twoth@example",
      type: "text",
    },

    {
      label: "Password",
      placeholder: "****************",
      type: "password",
    },
  ];
  //
  return (
    <div className="sign-form-container">
      <h2 className="sign-up-header">Sign in as a clinic  </h2>
      <form className="sign-form" onSubmit={handleSignIn}>
        {fields.map((f, i) => (
          <div className="field-container" key={i}>
            <label>{f.label}</label>
            <input type={f.type} placeholder={f.placeholder} />
          </div>
        ))}
        <AnimatingBtn className="submit">Sign in</AnimatingBtn>
      </form>


      <div className="third-party-auth" >
        -OR-
        <ThirdPartySignUp />
        <small>
          You don't have an account?{" "}
          <Link to="/sign-up" className="link">
            Sign up
          </Link>
        </small>
        <br/>
        <small>
          You are a dentist? {" "}
          <Link to="/" className="link">
            Sign in
          </Link>
        </small>
      </div>
    </div>
  );
}

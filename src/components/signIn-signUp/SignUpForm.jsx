import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AnimatingBtn from "../animating-btn/AnimatingBtn";
import "./forms.css";
import ThirdPartySignUp from "./ThirdPartySignUp";




export default function SignUpForm() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log(user);
  //if the user is authenticated, redirect them to generate plan
  useEffect(() => {
    if (user.isAuth) {
      navigate("/generate-plan");
    }
  });

  const fields = [
    {
      label: "Clinic's owner name",
      placeholder: "Ex: mahmoud barbary",
      type: "text",
    },
    {
      label: "Clinic's full name",
      placeholder: "Ex: Twoth london",
      type: "text",
    },
    {
      label: "Clinic's email",
      placeholder: "Ex: twoth@example",
      type: "text",
    },
    {
      label: "Clinic's mobile number",
      placeholder: "Ex: +201061949054",
      type: "text",
    },
    {
      label: "Password",
      placeholder: "****************",
      type: "password",
    },
  ];

  const handleSubmit = () => {};
  return (
    <div className="sign-form-container">
      <h2 className="sign-up-header">Create a Clinic Account</h2>
      <form className="sign-form">
        {fields.map((f, i) => (
          <div className="field-container" key={i}>
            <label>{f.label}</label>
            <input type={f.type} placeholder={f.placeholder} />
          </div>
        ))}
        <AnimatingBtn className="submit">Create account</AnimatingBtn>
      </form>
      <div className="third-party-auth">
        -OR-
        <ThirdPartySignUp />

        <small>
          Already have an account?{" "}
          <Link to="/" className="link">
            Sign in
          </Link>
        </small>
      </div>
    </div>
  );
}

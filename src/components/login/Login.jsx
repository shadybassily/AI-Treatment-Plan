import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {userLogin} from "../../store/userSlice"

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  console.log(user)
  //if the user is authenticated, redirect them to generate plan
  useEffect(() => {
    if (user.isAuth) {
      navigate("/generate-plan");
    }
  });

  const handleLogin = () => {
    dispatch(userLogin("hehe@hehe.com"))
  };
  return <Link to="/generate-plan" onClick={handleLogin}>Login</Link>;
}

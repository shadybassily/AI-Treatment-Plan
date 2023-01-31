import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DisplayPlans from "../display-plans/DisplayPlans";
import { userLogout } from "../../store/userSlice";

import "./sidebar.css";

export default function SideBar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <div className="sidebar">
      <h1 className="header">
        Treatment Plan
        <br /> Writer AI
      </h1>
      <DisplayPlans />
      <Link to="/" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DisplayPlans from "../display-plans/DisplayPlans";
import { userSignOut } from "../../store/userSlice";

import "./sidebar.css";
import WebsiteHeader from "../webiste-header/WebsiteHeader";

export default function SideBar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userSignOut());
  };

  return (
    <div className="sidebar">
      <WebsiteHeader />
      <DisplayPlans />
      <Link to="/" onClick={handleLogout}>
        Sign out
      </Link>
    </div>
  );
}

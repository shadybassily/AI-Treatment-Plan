import { Outlet } from "react-router-dom";
import WebsiteHeader from "../webiste-header/WebsiteHeader";
import "./without-sidebar.css";

//a stand-alone component that will display
//components without side bar ex: login/registration
export default function WithoutSidebar() {
  return (
    <div className="without-sidebar-container">
      <WebsiteHeader />
      <p>
        Your quick way for making a treatment plan <br />
        for your patients
      </p>
      <Outlet />
    </div>
  );
}

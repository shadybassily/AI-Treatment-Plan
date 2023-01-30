import { Outlet } from "react-router-dom";

//a stand-alone component that will display
//components without side bar ex: login/registration
export default function WithoutSidebar() {
  return <Outlet />;
}

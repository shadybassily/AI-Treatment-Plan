import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";

//a stand-alone component that will display
//components with side bar ex: once logged in
export default function WithSidebar() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  )
}

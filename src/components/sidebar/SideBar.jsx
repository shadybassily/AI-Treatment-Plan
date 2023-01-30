import DisplayPlans from "../display-plans/DisplayPlans";
import "./sidebar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <h1 className="header">
        Treatment Plan
        <br /> Writer AI
      </h1>
      <DisplayPlans />
    </div>
  );
}

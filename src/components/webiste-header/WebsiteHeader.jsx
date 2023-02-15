

import logo from "../../assets/logo/logo.svg"
export default function WebsiteHeader() {
  return (
    <div
    className= "italic text-2xl font-bold font-poppins text-darkest"
    style={{ color: "#0E4551" }}
  >
    Treatment Plan
    <div className="flex items-center">
      Writer AI{" "}
      <div className="inline-block">
        <div
          className="w-12 h-10 px-1 border-main flex justify-center items-center"
        >
          <img src={logo} className="scale-150" />
        </div>
      </div>
    </div>
  </div>
  );
}

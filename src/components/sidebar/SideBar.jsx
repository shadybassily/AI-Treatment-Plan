import DisplayPlans from '../display-plans/DisplayPlans';
import SidebarBottom from './SidebarBottom';
import SidebarTop from './SidebarTop';

export default function SideBar() {
   return (
      <div className="bg-accent w-1/4  items-center text-sm ">
         <SidebarTop />
         <hr className="border border-lighter w-full" />
         <DisplayPlans />
         <hr className="border border-lighter w-full" />
         <SidebarBottom />
      </div>
   );
}

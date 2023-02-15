import { useDispatch } from 'react-redux';
import DisplayPlans from '../display-plans/DisplayPlans';
import { userSignOut } from '../../store/userSlice';

import './sidebar.css';
import WebsiteHeader from '../webiste-header/WebsiteHeader';

export default function SideBar() {
   const dispatch = useDispatch();
  //  const handleLogout = () => {
  //     dispatch(userSignOut());
  //  };

   return (
      <div className="sidebar bg-accent w-1/4">
         <WebsiteHeader />
         <DisplayPlans />
      </div>
   );
}

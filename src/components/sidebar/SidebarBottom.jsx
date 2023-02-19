import { useState } from 'react';
import { BsExclamationLg } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';
import ConfirmationPrompt from '../ConfirmationPrompt';
import { clearPlans, dummyPlan, selectPlan } from '../../store/planSLice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userSignOut } from '../../store/userSlice';

export default function SidebarBottom() {
   const dispatch = useDispatch();
   const navigate = useNavigate()
   const [isShowPrompt, setIsShowPrompt] = useState(false);
   const promptMessage = 'Are you sure you want to delete all plans';

   const handleDeletePlans = () => {
      dispatch(clearPlans());
      dispatch(selectPlan(dummyPlan))
   };

   const handleSignout=()=>{
      dispatch(userSignOut())
      navigate("/")
   }
   return (
      <>
         {isShowPrompt && (
            <ConfirmationPrompt
               setIsShowPrompt={setIsShowPrompt}
               promptMessage={promptMessage}
               action={handleDeletePlans}
            />
         )}
         <ul className="flex flex-col justify-center gap-3 w-9/12 font-medium py-6 m-auto">
            <li
               className="flex items-center gap-x-2 cursor-pointer"
               onClick={() => setIsShowPrompt(true)}
            >
               <BsFillTrashFill className="text-secondary" /> Clear Plans
            </li>
            <li className="flex items-center gap-x-2 cursor-pointer">
               <BsExclamationLg className="text-secondary" /> FAQs
            </li>
         </ul>
         <p onClick={handleSignout}>signout</p>
      </>
   );
}

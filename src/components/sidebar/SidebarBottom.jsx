import { BsExclamationLg } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';

export default function SidebarBottom() {
   return (
      <ul className="flex flex-col justify-center gap-2 w-9/12 font-medium pt-3">
         <li className="flex items-center gap-x-2 cursor-pointer">
            <BsFillTrashFill className="text-secondary" /> Clear Plans
         </li>
         <li className="flex items-center gap-x-2 cursor-pointer">
            <BsExclamationLg className="text-secondary" /> FAQs
         </li>
      </ul>
   );
}

import logo from '../../assets/logo/logo.png';
import writeBlogIcon from '../../assets/icons/write-blog.png';
import generatePlanIcon from '../../assets/icons/generat-plan.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const menuOptions = [
   {
      id: 1,
      option: 'Treatment Plan Writer',
      URL: '/generate-plan',
      icon: generatePlanIcon,
   },
   {
      id: 2,
      option: 'Blog Writer',
      URL: '/blog-writer',
      icon: writeBlogIcon,
   },
];
// prettier-ignore
export default function SidebarTop() {
   const [selectedOptionId, setSelectedOptionId] = useState(1);
   const SelectedOptionStyle = 'font-normal text-black bg-lighter border-r-2 border-secondary transition-all ease-in-out';

   return (
      <div className="w-9/12 flex gap-y-6 flex-col pt-4">
         <img src={logo} className="h-10 w-fit"/>
         <ul className="w-full m-auto font-light text-dimmed">
            {menuOptions.map((opt) =>
               <li onClick={() => {setSelectedOptionId(opt.id)}}>
                  <Link className={`p-2 block flex items-center gap-2 ${selectedOptionId == opt.id && SelectedOptionStyle}`}>
                     <span>{opt.option}</span>
                     <img src={opt.icon} />
                  </Link>
               </li>
            )}
         </ul>
      </div>
   );
}

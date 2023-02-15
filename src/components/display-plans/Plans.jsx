import { useDispatch, useSelector } from 'react-redux';
import { deletePlan } from '../../store/planSLice';
import { selectPlan, dummyPlan } from '../../store/planSLice';
import { GoPrimitiveDot } from 'react-icons/go';

export default function Plans({ plansToDisplay }) {
   return (
      <ul className="flex flex-col gap-y-2 h-80 overflow-y-scroll w-full capitalize font-light ">
         {plansToDisplay.map((p) => (
            <Plan key={p.id} plan={p} />
         ))}
      </ul>
   );
}

const Plan = ({ plan }) => {
   const selectedPlan = useSelector((state) => state.plan.selectedPlan);
   const dispatch = useDispatch();
   const patientName = plan.formData.patientName;
   const isSelected = selectedPlan?.id === plan.id ? true : false;

   const handleSelectPlan = () => {
      dispatch(selectPlan(plan));
   };

   const handleDeletePlan = (id) => {
    // if -the plan to delete- is the selectedPlan
    if (selectedPlan?.id == id) {
       dispatch(selectPlan(dummyPlan));
    }
    dispatch(deletePlan(id));
 };

   return (
      <li
         className={`flex items-center cursor-pointer ${
            isSelected &&
            'font-medium border-r-2 border-secondary transition-all ease-in-out'
         }`}
      >
         <GoPrimitiveDot className="text-secondary text-sm" />
         <p className="w-full p-1" onClick={handleSelectPlan}>
            {patientName}
         </p>
      </li>
   );
};

// const handleDeletePlan = (id) => {
//     // if -the plan to delete- is the selectedPlan
//     if (selectedPlan?.id == id) {
//        dispatch(selectPlan(dummyPlan));
//     }
//     dispatch(deletePlan(id));
//  };

// const animationProps = {
//     initial: { opacity: 0, x: -15 },
//     animate: { opacity: 1, x: 0 },
//     transition: { duration: 0.5 },
//  };

{
   /* <div
className={`flex items-center w-11/12 cursor-pointer p-1 transition-all ease-in-out ${
   isSelected && 'bg-gradient-to-l from-transparent to-lighter'
}`}
>
<motion.li
   {...animationProps}
   className="w-full p-2 capitalize text-sm font-medium text-black "
   onClick={() => {
      handleSelectPlan(plan);
   }}
>
   {patientName}
</motion.li>

{/* delete plan*/
}
{
   /* <BsTrash
   className="text-lg text-secondary h-full"
   onClick={() => {
      handleDeletePlan(plan.id);
   }}
/> */
}
// </div> */}

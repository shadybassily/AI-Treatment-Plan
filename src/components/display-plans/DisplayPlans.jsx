import { useDispatch, useSelector } from 'react-redux';
import { deletePlan } from '../../store/planSLice';
import { motion } from 'framer-motion';
import { BsTrash } from 'react-icons/bs';
import { selectPlan, dummyPlan } from '../../store/planSLice';
import { useState } from 'react';

const Plan = ({ plan }) => {
   const dispatch = useDispatch();
   const selectedPlan = useSelector((state) => state.plan.selectedPlan);

   const patientName = plan.formData.patientName;
   const isSelected = selectedPlan?.id === plan.id ? true : false;

   const handleDeletePlan = (id) => {
      // if plan to delete is the selectedPlan
      if (selectedPlan?.id == id) {
         dispatch(selectPlan(dummyPlan));
      }
      dispatch(deletePlan(id));
   };
   const handleSelectPlan = (plan) => {
      dispatch(selectPlan(plan));
   };

   const animationProps = {
      initial: { opacity: 0, x: -15 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 },
   };

   return (
      <div
         className={`flex items-center cursor-pointer p-1 transition-all ease-in-out ${
            isSelected &&
            'border-r-4 border-secondary bg-gradient-to-l from-transparent to-lighter'
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

         {/* delete plan*/}
         <BsTrash
            className="text-lg text-secondary h-full"
            onClick={() => {
               handleDeletePlan(plan.id);
            }}
         />
      </div>
   );
};

export default function DisplayPlans() {
   const plans = useSelector((state) => state.plan.value);

   const [searchInput, setSearchInput] = useState('');
   let results = plans.filter((p) =>
      p.formData.patientName.includes(searchInput)
   );
   let whatToDisplay = searchInput === '' ? plans : results;

   return (
      <div className="flex flex-col gap-y-4 w-4/5 ">
         {plans.length == 0 ? (
            <p className="">No plans yet</p>
         ) : (
            <>
               <input
                  className="w-full tracking-wider font-medium outline-none p-2 rounded text-sm text-secondary"
                  placeholder="search..."
                  value={searchInput}
                  onChange={(e) => {
                     setSearchInput(e.target.value);
                  }}
               />

               <ul className="flex flex-col gap-y-1.5">
                  {whatToDisplay.map((p) => (
                     <Plan key={p.id} plan={p} />
                  ))}
               </ul>
            </>
         )}
      </div>
   );
}

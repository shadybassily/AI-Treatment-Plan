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
      <div className="border flex">
         <motion.li
            {...animationProps}
            className={isSelected ? 'selected-plan' : ''}
            onClick={() => {
               handleSelectPlan(plan);
            }}
         >
            {patientName}
         </motion.li>

         {/* delete plan*/}
         <BsTrash
            className="delete"
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
   let results = plans.filter((p) => p.formData.patientName.includes(searchInput));
   let whatToDisplay = searchInput === "" ? plans : results

   return (
      <div className="border border-black">
         {plans.length == 0 ? (
            <p className="border border-black">No plans yet</p>
         ) : (
            <>
               <input
                  className="border border-black"
                  placeholder='search...'
                  value={searchInput}
                  onChange={(e) => {
                     setSearchInput(e.target.value);
                  }}
               />

               <ul className="border border-black ">
                  {whatToDisplay.map((p) => (
                     <Plan key={p.id} plan={p} />
                  ))}
               </ul>
            </>
         )}
      </div>
   );
}

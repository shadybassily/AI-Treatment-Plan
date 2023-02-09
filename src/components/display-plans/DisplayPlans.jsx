import { useDispatch, useSelector } from 'react-redux';
import { deletePlan } from '../../store/plansSLice';
import { motion } from 'framer-motion';
import { BsTrash } from 'react-icons/bs';
import { selectPlan } from '../../store/plansSLice';
import './display-plans.css';

//extracting Plan component
const Plan = ({ plan, deletePlan, handleSelectPlan, selected }) => {
   const patientName = plan.data.patientName;
   const animationProps = {
      initial: { opacity: 0, x: -15 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 },
   };
   return (
      <div className="plan">
         <motion.li
            className={selected ? 'selected-plan' : ''}
            {...animationProps}
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
               deletePlan(plan.id);
            }}
         />
      </div>
   );
};

//key dispatch
export default function DisplayPlans() {
   const selectedPlan = useSelector((state) => state.plan.selectedPlan);
   const dispatch = useDispatch();
   const plans = useSelector((state) => state.plan.value);

   const handleDeletePlan = (id) => {
      // if plan to delete is the selectedPlan
      if ((selectPlan.id = id)) {
         dispatch(selectPlan(null));
      }
      dispatch(deletePlan(id));
   };

   const handleSelectPlan = (plan) => {
      dispatch(selectPlan(plan));
   };

   return (
      <div className="plans-container">
         {plans.length == 0 && <p className="no-plans-yet">No plans yet</p>}
         <ul className="plans-list">
            {plans.map((p) => (
               <Plan
                  key={p.id}
                  plan={p}
                  deletePlan={handleDeletePlan}
                  handleSelectPlan={handleSelectPlan}
                  selected={selectedPlan?.id === p.id ? true : false}
               />
            ))}
         </ul>
      </div>
   );
}

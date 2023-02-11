import { useDispatch, useSelector } from 'react-redux';
import { deletePlan } from '../../store/planSLice';
import { motion } from 'framer-motion';
import { BsTrash } from 'react-icons/bs';
import { selectPlan } from '../../store/planSLice';
import './display-plans.css';

const Plan = ({ plan }) => {
   const dispatch = useDispatch();
   const selectedPlan = useSelector((state) => state.plan.selectedPlan);

   const patientName = plan.formData.patientName;
   const isSelected = selectedPlan?.id === plan.id ? true : false;

   const handleDeletePlan = (id) => {
      // if plan to delete is the selectedPlan
      if (selectedPlan?.id == id) {
         dispatch(selectPlan(null));
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
      <div className="plan">
         <motion.li
            className={isSelected ? 'selected-plan' : ''}
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
               handleDeletePlan(plan.id);
            }}
         />
      </div>
   );
};

export default function DisplayPlans() {
   const plans = useSelector((state) => state.plan.value);
   return (
      <div className="plans-container">
         {plans.length == 0 ? (
            <p className="no-plans-yet">No plans yet</p>
         ) : (
            <ul className="plans-list">
               {plans.map((p) => (
                  <Plan key={p.id} plan={p} />
               ))}
            </ul>
         )}
      </div>
   );
}

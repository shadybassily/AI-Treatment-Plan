import { useDispatch, useSelector } from 'react-redux';
import { deletePlan } from '../../store/plansSLice';
import { motion } from 'framer-motion';
import { BsTrash } from 'react-icons/bs';
import './display-plans.css';
import { Link } from 'react-router-dom';

//extracting Plan component
const Plan = ({ plan, deletePlan }) => {
   const patientName = plan.data.patientName;
   return (
      <div className="plan">
         <Link to={`plan-details/${plan.id}`}>
            <motion.li
               initial={{ opacity: 0, x: -15 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
            >
               {patientName}
            </motion.li>
         </Link>
         {/* delete plan*/}
         <BsTrash className="delete" onClick={deletePlan} />
      </div>
   );
};

//key dispatch
export default function DisplayPlans() {
   const dispatch = useDispatch();
   const plans = useSelector((state) => state.plan.value);

   const handleDeletePlan = (id) => {
      dispatch(deletePlan(id));
   };
   return (
      <div className="plans-container">
         {plans.length == 0 && <p className="no-plans-yet">No plans yet</p>}
         <ul className="plans-list">
            {plans.map((p) => (
               <Plan
                  plan={p}
                  deletePlan={() => {
                     handleDeletePlan(p.id);
                  }}
                  key={p.id}
               />
            ))}
         </ul>
      </div>
   );
}

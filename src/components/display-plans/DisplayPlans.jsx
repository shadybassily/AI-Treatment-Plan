import { useDispatch, useSelector } from "react-redux";
import { deletePlan } from "../../store/plansSLice";
import "./display-plans.css";
import { motion } from "framer-motion";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import PlanOverview from "./PlanOverview";
import { useState } from "react";

export default function DisplayPlans() {
  const [selectedPlan, setSelectedPlan] = useState();
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plan.value);
 
  const isPlans = plans.length == 0 ? false : true
  //show only 4 plans 
  let limit = 4;
  const plansToDisplay = plans.filter((p, i) => i + 1 <= limit);

  const handleDeletePlan = (id) => {
    dispatch(deletePlan(id));
  };

  return (
    <>
      <div className="plans-container">
        <p>Plans</p>
        {!isPlans && <p className="no-plans-yet">No plans yet</p>}
        <ul className="plans-list">
          {plansToDisplay.map((p) => (
            <motion.li
              onClick={() => {
                setSelectedPlan(p);
              }}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="plan"
              key={p.id}
            >
              {p.data.patientName}

              {/* delete plan*/}
              <BsTrash
                className="delete"
                onClick={() => {
                  handleDeletePlan(p.id);
                }}
              />
            </motion.li>
          ))}
        </ul>

        {/* the logic to be implemented */}
        {plans.length > limit && (
          <Link to="/plans" className="show-more">
            Show More
          </Link>
        )}
      </div>
      <PlanOverview plan={selectedPlan} />
    </>
  );
}

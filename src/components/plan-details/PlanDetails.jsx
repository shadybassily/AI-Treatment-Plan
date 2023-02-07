import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPlan } from '../../store/plansSLice';
import './plan-details.css';

export default function PlanDetails() {
   const params = useParams();
   const planId = params.id;
   //getting the plan by id, using a memoized selector
   const plan = useSelector((state) => getPlan(state, planId))[0];
   const text = plan?.text

   //using dangerouslySetInnerHTML because plan.text will be in html format containing html tags
   return (
      <div className="plan-overview">
         <Link to="/generate-plan">Back</Link>
         <div dangerouslySetInnerHTML={{ __html: text }} className="plan-details"/>
      </div>
   );
}

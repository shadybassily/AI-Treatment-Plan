import { useSelector } from "react-redux";
import "./plan-overview.css";

export default function PlanOverview({ plan }) {
  const plans = useSelector((state) => state.plan.value);
  console.log(plan)

  // in case a plan gets deleted, remove the overview as well
  const isDeleted =
    plans.filter((p) => p.id == plan?.id).length == 0 ? true : false;
  const isPlans = plans.length == 0 ? false : true;

  if (isDeleted | !isPlans) {
    return <></>;
  } else {
    //using dangerouslySetInnerHTML because plan.text will be in html format containing html tags
    return (
      <div
        className="plan-overview"
        dangerouslySetInnerHTML={{ __html: plan.text }}
      />
    );
  }
}

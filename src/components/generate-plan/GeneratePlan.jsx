import Form from './form/Form';
import TextEditor from './editor/TextEditor';
import { useSelector } from 'react-redux';

export default function GeneratePlan() {
   const selectedPlan = useSelector((state) => state.plan.selectedPlan);

   return (
      <>
         <Form selectedPlan={selectedPlan} />
         <TextEditor selectedPlan={selectedPlan} />
      </>
   );
}

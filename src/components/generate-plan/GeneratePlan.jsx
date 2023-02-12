import { useEffect, useState } from 'react';
import Form from './form/Form';
import GeneratingLoader from './generating-loader/GeneratingLoader';
import TextEditor from './editor/TextEditor';
import { fetchChatGPTResponse } from '../../hooks/useReactQuery';
import { useDispatch, useSelector } from 'react-redux';
import { savePlan, selectPlan } from '../../store/planSLice';

export default function GeneratePlan() {
   const dispatch = useDispatch();
   const plans = useSelector((state) => state.plan.value);
   const selectedPlan = useSelector((state) => state.plan.selectedPlan);
   
   const [formInputs, setFormInputs] = useState();
   const { data, refetch, fetchStatus } = fetchChatGPTResponse(formInputs);

   const generatePlan = (formInputs) => {
      let text = data?.text
      const planToSave = {
         id: plans.length + 1,
         text,
         formData: formInputs,
      };
      dispatch(savePlan(planToSave));
      dispatch(selectPlan(planToSave));
   };

   //on submitting form
   const onSubmit = async (data) => {
      setFormInputs(data);
      await refetch();
   };
   
   useEffect(() => {
      // the returned data (response) will initially be undefined
      // wait till the fetched data is valid
      if (data !== undefined) {
         generatePlan(formInputs);
      }
   }, [data]);

   return (
      <>
         {fetchStatus == 'fetching' && <GeneratingLoader />}
         <Form onSubmit={onSubmit} selectedPlan={selectedPlan} />
         <TextEditor chatGPTResponse={data} selectedPlan={selectedPlan}/>
      </>
   );
}

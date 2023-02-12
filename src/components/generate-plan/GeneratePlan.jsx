import { useEffect, useState } from 'react';
import Form from './form/Form';
import GeneratingLoader from './generating-loader/GeneratingLoader';
import TextEditor from './editor/TextEditor';
import { fetchChatGPTResponse } from '../../hooks/useReactQuery';
import { useDispatch, useSelector } from 'react-redux';
import { savePlan, selectPlan } from '../../store/planSLice';

//random id
import { nanoid } from 'nanoid/non-secure'

export default function GeneratePlan() {
   const dispatch = useDispatch();
   const selectedPlan = useSelector((state) => state.plan.selectedPlan);
   
   const [formInputs, setFormInputs] = useState();
   const { data: response, refetch, fetchStatus } = fetchChatGPTResponse(formInputs);

   const generatePlan = (formInputs) => {
      let chatGPTResponse = response?.text
      const id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqLJ"
      const planToSave = {
         id,
         chatGPTResponse,
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
      if (response !== undefined) {
         generatePlan(formInputs);
      }
   }, [response]);

   return (
      <>
         {fetchStatus == 'fetching' && <GeneratingLoader />}
         <Form onSubmit={onSubmit} selectedPlan={selectedPlan} />
         <TextEditor chatGPTResponse={response} selectedPlan={selectedPlan}/>
      </>
   );
}

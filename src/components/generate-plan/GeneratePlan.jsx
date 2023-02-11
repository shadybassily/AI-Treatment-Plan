import { useEffect, useState } from 'react';
//components
import Form from './form/Form';
import GeneratingLoader from './generating-loader/GeneratingLoader';

import TextEditor from './editor/TextEditor';
import { fetchChatGPTResponse } from '../../hooks/useReactQuery';
import { useDispatch, useSelector } from 'react-redux';
import { savePlan, selectPlan } from '../../store/planSLice';

export default function GeneratePlan() {
   const dispatch = useDispatch();
   const plans = useSelector((state) => state.plan.value);

   const [formInputs, setFormInputs] = useState();
   const { data, refetch, fetchStatus } = fetchChatGPTResponse(formInputs);

   const generatePlan = (formInputs) => {
      let text = data?.text
      //if form inputs are valid
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
      // wait till the fetched 
      if (data !== undefined) {
         generatePlan(formInputs);
      }
   }, [data]);

   return (
      <>
         {fetchStatus == 'fetching' && <GeneratingLoader />}
         <Form onSubmit={onSubmit} />
         <TextEditor chatGPTResponse={data} />
      </>
   );
}

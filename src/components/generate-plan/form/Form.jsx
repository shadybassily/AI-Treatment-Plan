//components
import { questions } from '../../../hooks/useReactForm';
import Question from './Question';
import AnimatingBtn from '../../animating-btn/AnimatingBtn';
import GeneratingLoader from '../generating-loader/GeneratingLoader';
//hooks
import { useDispatch } from 'react-redux';
//custom hooks
import useReactForm from '../../../hooks/useReactForm';
import { savePlan, selectPlan } from '../../../store/planSLice';
import useAxios from '../../../hooks/useAxios';
import { nanoid } from 'nanoid/non-secure';
import './form.css';
import { useEffect } from 'react';

export default function Form({ selectedPlan }) {
   const dispatch = useDispatch();
   const { register, handleSubmit, setValue, errors } = useReactForm();
   const [fetchChatGPTResponse, isLoading] = useAxios();

   const generatePlan = (response, formInputs) => {
      let chatGPTResponse = response?.text;
      const id = nanoid(); //=> "Uakgb_J5m9g-0JDMbcJqLJ"
      const planToSave = {
         id,
         chatGPTResponse,
         formData: formInputs,
      };
      dispatch(savePlan(planToSave));
      dispatch(selectPlan(planToSave));
   };

   const onSubmit = async (formInputs) => {
      let response = await fetchChatGPTResponse();
      generatePlan(response, formInputs);
   };

   useEffect(() => {
      Object.entries(selectedPlan.formData).forEach(([name, value]) => {
         setValue(name, `${value}`);
      });
   }, [selectedPlan]);

   return (
      <>
         {isLoading && <GeneratingLoader />}
         <section className="middle-section">
            {/* head */}
            <div className="header">
               <p>Please answer these questions to generate your plan</p>
            </div>
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)} className="form">
               {questions.map((q) => (
                  <Question
                     key={q.id}
                     selectedPlan={selectedPlan}
                     question={q}
                     register={register}
                     setValue={setValue}
                     error={errors}
                  />
               ))}

               <AnimatingBtn type="submit" className="generate">
                  Generate My Plan
               </AnimatingBtn>
            </form>
         </section>
      </>
   );
}

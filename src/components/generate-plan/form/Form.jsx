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
         <section className="bg-white w-4/12 flex flex-col  h-screen">
            {/* head */}
            <div className="h-60 flex items-end border-b-2 border-accent ">
               <p className="border-b-2 border-secondary text-sm text-secondary font-medium p-1">
                  Please answer these questions to generate your plan
               </p>
            </div>
            {/* form */}
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="border border-accent flex flex-wrap justify-between gap-y-7 p-8 overflow-y-scroll"
            >
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

               <AnimatingBtn
                  type="submit"
                  className="w-full bg-secondary text-white font-medium p-2"
               >
                  Generate My Plan
               </AnimatingBtn>
            </form>
         </section>
      </>
   );
}

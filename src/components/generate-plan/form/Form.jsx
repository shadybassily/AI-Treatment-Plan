import { questions } from '../../../hooks/useReactForm';
import Question from './Question';
import AnimatingBtn from '../../animating-btn/AnimatingBtn';

import useReactForm from '../../../hooks/useReactForm';
import './form.css';

export default function Form({ setFormInputs, fetchchatGPTResponse }) {
   const { register, handleSubmit, errors } = useReactForm({});
   //save the form fields, and fetch the response
   const onSubmit = (data) => {
      setFormInputs(data);
      fetchchatGPTResponse()
   };

   return (
      <section className="middle-section">
         {/* head */}
         <div className="header">
            <p>Please answer these questions to generate your plan</p>
         </div>
         {/* form */}
         <form onSubmit={handleSubmit(onSubmit)} className="form">
            {questions.map((q) => (
               <Question
                  question={q}
                  key={q.id}
                  register={register(q.name)}
                  error={errors?.[q.name]?.message}
               />
            ))}
            <AnimatingBtn type="submit" className="generate">
               Generate My Plan
            </AnimatingBtn>
         </form>
      </section>
   );
}

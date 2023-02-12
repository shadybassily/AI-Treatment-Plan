import { questions } from '../../../hooks/useReactForm';
import Question from './Question';
import AnimatingBtn from '../../animating-btn/AnimatingBtn';
import useReactForm from '../../../hooks/useReactForm';
import './form.css';

export default function Form({ onSubmit, selectedPlan }) {
   const { register, handleSubmit, setValue, errors } = useReactForm();

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
   );
}

import { useEffect } from 'react';

export default function Question({question, register, error, selectedPlan}) {
   const { id, name, label, type, placeHolder } = question;
   const errorMessage = error[name]?.message;
   //3 types of questions
   //input, select, textarea
   let input;
   switch (type) {
      case 'text':
         //errors can only occure on input tags so applying red border if there are any.
         //textarea is optional, select can't cause an error
         input = (
            <input
               placeholder={placeHolder}
               {...register(name)}
               className={`${errorMessage && 'red-border'}`}
            />
         );
         break;
      case 'select':
         input = (
            <select {...register(name)}>
               {question.options?.map((option, i) => (
                  <option value={option} key={i}>
                     {option}
                  </option>
               ))}
            </select>
         );
         break;
      case 'textarea':
         input = (
            <>
               <p className="optional">optional</p>
               <textarea
                  placeholder={placeHolder}
                  {...register(name)}
                  className="comment"
               />
            </>
         );
         break;
   }

   // useEffect(() => {
   //    setValue(name, `${selectedPlan?.formData[name]}`);
   // }, [selectedPlan]);

   return (
      <div className="question">
         <div className="number-label-container">
            <span className="number">{id}</span>
            <label className="label">{label}</label>
         </div>
         {input}
         {/* if error */}
         {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
   );
}

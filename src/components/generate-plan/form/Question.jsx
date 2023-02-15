
export default function Question({ question, register, error }) {
   const { id, name, label, type, placeHolder } = question;
   const errorMessage = error[name]?.message;
   //common styles between all input types
   let commonStyleClasses =
      'w-full border border-2 border-lighter rounded p-2 pl-6 shadow-md shadow-lighter outline-0';
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
               className={`${commonStyleClasses} ${
                  errorMessage && 'border-rose-600'
               }`}
            />
         );
         break;
      case 'select':
         input = (
            <select {...register(name)} className={`${commonStyleClasses} bg-transparent`}>
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
                  className={`${commonStyleClasses}`}
               />
            </>
         );
         break;
   }

   //Q6 & Q7 dont take full width
   const halfWidth = id == 7 || (id == 8) & true;

   return (
      <div
         className={`flex flex-col gap-y-2 font-medium ${
            halfWidth ? 'w-40 text-sm' : 'w-full'
         }`}
      >
         <div className=" flex ">
            <span className="bg-lighter p-3 flex justify-center items-center mr-2 w-9 h-9 rounded-full">
               {id}
            </span>
            <label className=" flex items-center">{label}</label>
         </div>
         {input}
         {/* if error */}
         {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
   );
}

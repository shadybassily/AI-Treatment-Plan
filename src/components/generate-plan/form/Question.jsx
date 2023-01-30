export default function Question({ question, register, error }) {
  const { id, label, type, placeHolder } = question;
  //3 types of questions
  //input, select, textarea
  let input;
  switch (type) {
    case "text":
      //errors can only occure on input tags so applying red border if there are any.
      //textarea is optional, select can't cause an error
      input = <input placeholder={placeHolder} {...register} className={`${error && "red-border"}`}/>;
      break;

    case "select":
      input = (
        <select {...register}>
          {question.options?.map((option, i) => (
            <option value={option} key={i}>
              {option}
            </option>
          ))}
        </select>
      );
      break;

    case "textarea":
      input = (
        <>
          <p className="optional">optional</p>
          <textarea placeholder={placeHolder} {...register} className="comment"/>
        </>
      );
      break;
  }

  return (
    <div className="question">
      <div className="number-label-container">
        <span className="number">{id}</span>
        <label className="label">{label}</label>
      </div>
      {input}
      {/* if error */}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

import { questions } from "../../../hooks/useReactForm";
import Question from "./Question";
import useReactForm from "../../../hooks/useReactForm";
import "./form.css";
import AnimatingBtn from "../../animating-btn/AnimatingBtn";

const response = {
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum",
};

export default function Form({ setOutput, setFormInputs }) {
  const { register, handleSubmit, errors } = useReactForm({});
  const onSubmit = (data) => {
    console.log(data);
    setFormInputs(data);
    setOutput(response);
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

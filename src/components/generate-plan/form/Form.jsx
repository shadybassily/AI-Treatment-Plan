import { questions } from "../../../hooks/useReactForm";
import Question from "./Question";
import AnimatingBtn from "../../animating-btn/AnimatingBtn";

import useReactForm from "../../../hooks/useReactForm";
import { fetchResponse } from "../../../hooks/useReactQuery";
import "./form.css";

export default function Form({ setOutput, setFormInputs }) {
  const { register, handleSubmit, errors } = useReactForm({});
  const { data: response, isLoading, refetch, isError } = fetchResponse();

  const onSubmit = (data) => {
    console.log(data);
    setFormInputs(data);
    //fetch response on click
    refetch();
    setOutput(response);
  };

  if (isError) return <div>Error while fetching data</div>;
  if (isLoading) return <div>...Loading</div>;

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

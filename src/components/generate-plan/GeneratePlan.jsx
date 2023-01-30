import { useState } from "react";
import Form from "./form/Form";
import TextEditor from "./editor/TextEditor";

export default function GeneratePlan() {
  const [output, setOutput] = useState("");
  const [formInputs, setFormInputs] = useState({});

  //form inputs will be saved as a part of the plan
  //thats why the state is lifted so we can pass it to the textEditor
  return (
    <>
      <Form output={output} setOutput={setOutput} setFormInputs={setFormInputs} />
      <TextEditor output={output} formInputs={formInputs}/>
    </>
  );
}

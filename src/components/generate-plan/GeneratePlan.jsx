import { useEffect, useState } from "react";
import Form from "./form/Form";
import TextEditor from "./editor/TextEditor";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function GeneratePlan() {
  const [output, setOutput] = useState("");
  const [formInputs, setFormInputs] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  //if the user is not auth, redirect them to login page
  useEffect(() => {
    if (!user.isAuth) {
      navigate("/");
    }
  });

  //form inputs will be saved as a part of the plan
  //thats why the state is lifted so we can pass it to the textEditor
  return (
    <>
      <Form output={output} setOutput={setOutput} setFormInputs={setFormInputs} />
      <TextEditor output={output} formInputs={formInputs}/>
    </>
  );
}

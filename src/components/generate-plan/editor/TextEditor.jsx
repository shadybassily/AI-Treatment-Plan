import React, { useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import useTextEditor from "../../../hooks/useTextEditor";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AnimatingBtn from "../../animating-btn/AnimatingBtn";
import "./editor.css";

import { useDispatch, useSelector } from "react-redux";
import { savePlan } from "../../../store/plansSLice";

export default function TextEditor({ output, formInputs }) {
  //saved plans
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plan.value);

  const { editorState, setEditorState, sendTextToEditor, toolbarOptions } =
    useTextEditor();
  
  //display output in the editor
  useEffect(() => {
    sendTextToEditor(output.text);
  }, [output]);

  //save plan along with form inputs
  const handleSave = () => {
    let editorContent = editorState.getCurrentContent().getPlainText();
    //save if editor not empty (we get a respsone/output)
    //and if we have valid data (to prevent saving plans written in the editor without valid form inputs)
    if ((editorContent.length !== 0) & (Object.keys(formInputs).length !== 0)) {
      const planToSave = {
        id: plans.length + 1,
        text: editorContent,
        data: formInputs,
      };
      dispatch(savePlan(planToSave));
    }
  };
  
  const props = {
    editorState,
    onEditorStateChange: setEditorState,
    placeholder: "Your plan will be generated here",
    wrapperClassName: "rdw-editor-wrapper",
    editorClassName: "rdw-editor-main",
    toolbarClassName: "rdw-editor-toolbar",
    toolbar: toolbarOptions,
  };

  return (
    <div className="editor-container">
      <AnimatingBtn className="save-button" onClick={handleSave}>
        Save
      </AnimatingBtn>
      <Editor {...props} />
    </div>
  );
}

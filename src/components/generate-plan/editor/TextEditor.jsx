import React, { useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import useTextEditor from "../../../hooks/useTextEditor";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AnimatingBtn from "../../animating-btn/AnimatingBtn";
import "./editor.css";

import { useDispatch, useSelector } from "react-redux";
import { savePlan } from "../../../store/plansSLice";

import { stateToHTML } from "draft-js-export-html";

export default function TextEditor({ output="", formInputs }) {
  //saved plans
  const plans = useSelector((state) => state.plan.value);
  const dispatch = useDispatch();

  const { editorState, setEditorState, sendTextToEditor, toolbarOptions } =
    useTextEditor();

  //display output in the editor
  useEffect(() => {
    sendTextToEditor(editorState,output.text);
  }, [output]);

  //save plan along with form inputs
  const handleSave = () => {
    let contentState = editorState.getCurrentContent();
    let html = stateToHTML(contentState);

    //save if editor not empty (we get a respsone/output)
    //and if we have valid data (to prevent saving plans written in the editor without valid form inputs)
    if ((contentState.length !== 0) & (Object.keys(formInputs).length !== 0)) {
      const planToSave = {
        id: plans.length + 1,
        text: html,
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

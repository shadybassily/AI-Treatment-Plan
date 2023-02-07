import React, { useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import useTextEditor from '../../../hooks/useTextEditor';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import AnimatingBtn from '../../animating-btn/AnimatingBtn';
import './editor.css';

import { useDispatch, useSelector } from 'react-redux';
import { savePlan } from '../../../store/plansSLice';

export default function TextEditor({ output, formInputs }) {
   //saved plans
   const plans = useSelector((state) => state.plan.value);
   const dispatch = useDispatch();

   const {
      editorState,
      toolbarOptions,
      contentState,
      setEditorState,
      sendTextToEditor,
      convertToHTML,
   } = useTextEditor();

   //display output in the editor
   useEffect(() => {
      sendTextToEditor(editorState, output?.text);
   }, [output]);

   //save plan along with form inputs
   const handleSave = (contentState) => {
      let text = convertToHTML();
      //if form inputs are valid
      let isValidToSave = Object.keys(formInputs).length !== 0 ? true : false;

      if (isValidToSave) {
         const planToSave = {
            id: plans.length + 1,
            text,
            data: formInputs,
         };
         dispatch(savePlan(planToSave));
      }
   };

   const props = {
      editorState,
      onEditorStateChange: setEditorState,
      placeholder: 'Your plan will be generated here',
      wrapperClassName: 'rdw-editor-wrapper',
      editorClassName: 'rdw-editor-main',
      toolbarClassName: 'rdw-editor-toolbar',
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

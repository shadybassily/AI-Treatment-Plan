import { useEffect } from 'react';
//components
import { Editor } from 'react-draft-wysiwyg';
import AnimatingBtn from '../../animating-btn/AnimatingBtn';
//hooks
import useTextEditor from '../../../hooks/useTextEditor';
//store
import { useDispatch, useSelector } from 'react-redux';
import { savePlan, selectPlan } from '../../../store/plansSLice';
//styling
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './editor.css';

export default function TextEditor({ chatGPTResponse, formInputs }) {
   const selectedPlan = useSelector((state) => state.plan.selectedPlan);
   const plans = useSelector((state) => state.plan.value);
   const dispatch = useDispatch();

   const {
      editorState,
      toolbarOptions,
      onEditorStateChange,
      displayInEditor,
      convertToHTML,
   } = useTextEditor();

   //display chatGPT response in the editor
   useEffect(() => {
      displayInEditor(chatGPTResponse?.text);
   }, [chatGPTResponse]);

   //displaying selected plan in the Editor
   useEffect(() => {
      displayInEditor(selectedPlan?.text);
   }, [selectedPlan]);

   //save plan along with form inputs
   const handleSave = () => {
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
         dispatch(selectPlan(planToSave))
      }
   };

   const toolbarProps = {
      editorState,
      onEditorStateChange: onEditorStateChange,
      placeholder: 'Your plan will be generated here',
      toolbar: toolbarOptions,
   };

   return (
      <div className="editor-container">
         <AnimatingBtn className="save-button" onClick={handleSave}>
            Save
         </AnimatingBtn>
         <Editor {...toolbarProps} />
      </div>
   );
}

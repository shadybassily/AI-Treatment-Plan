import { useEffect } from 'react';
//components
import { Editor } from 'react-draft-wysiwyg';
import AnimatingBtn from '../../animating-btn/AnimatingBtn';
//hooks
import useTextEditor from '../../../hooks/useTextEditor';
//styling
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './editor.css';
import { useSelector } from 'react-redux';

export default function TextEditor() {
   const { editorState, toolbarOptions, onEditorStateChange, displayInEditor } =
      useTextEditor();
   const selectedPlan = useSelector((state) => state.plan.selectedPlan);

   //displaying selected plan in the Editor
   useEffect(() => {
      displayInEditor(selectedPlan?.text);
   }, [selectedPlan]);

   const toolbarProps = {
      editorState,
      onEditorStateChange: onEditorStateChange,
      placeholder: 'Your plan will be generated here',
      toolbar: toolbarOptions,
   };

   return (
      <div className="editor-container">
         <AnimatingBtn className="save-button">Save</AnimatingBtn>
         <Editor {...toolbarProps} />
      </div>
   );
}

//   //save plan along with form inputs
//   const handleSave = () => {
//    let text = convertToHTML();
//    //if form inputs are valid
//    let isValidToSave = Object.keys(formInputs).length !== 0 ? true : false;
//    if (isValidToSave) {
//       const planToSave = {
//          id: plans.length + 1,
//          text,
//          formData: formInputs,
//       };
//       dispatch(savePlan(planToSave));
//       dispatch(selectPlan(planToSave));
//    }
// };

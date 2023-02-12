//hooks
import { useEffect } from 'react';
import useTextEditor from '../../../hooks/useTextEditor';
import { updatePlan } from '../../../store/planSLice';
import { useDispatch } from 'react-redux';
//components
import { Editor } from 'react-draft-wysiwyg';
import AnimatingBtn from '../../animating-btn/AnimatingBtn';
//styling
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './editor.css';

export default function TextEditor({ selectedPlan }) {
   const dispatch = useDispatch()
   const {
      editorState,
      toolbarOptions,
      onEditorStateChange,
      displayInEditor,
      convertToHTML,
   } = useTextEditor();

   //displaying selected plan in the Editor
   useEffect(() => {
      displayInEditor(selectedPlan?.chatGPTResponse);
   }, [selectedPlan]);

   const editorProps = {
      editorState,
      onEditorStateChange: onEditorStateChange,
      placeholder: 'Your plan will be generated here',
      toolbar: toolbarOptions,
   };

   const handleSaveUpdatedPlan = () => {
      //save only if we have selectedPlan active
      if (selectedPlan.id !== '') {
         let updatedContent = convertToHTML();

         let newPlan = {
            ...selectedPlan,
            chatGPTResponse : updatedContent
         }
         dispatch(updatePlan(newPlan))
      }
   };
   return (
      <div className="editor-container">
         <AnimatingBtn className="save-button" onClick={handleSaveUpdatedPlan}>
            Save
         </AnimatingBtn>
         <Editor {...editorProps} />
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

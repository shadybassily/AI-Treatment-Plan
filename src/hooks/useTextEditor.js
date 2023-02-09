import { useState } from 'react';
// toolbar icons
import bold from '../assets/editor-icons/bold.png';
import italic from '../assets/editor-icons/italic.png';
import underline from '../assets/editor-icons/underline.png';
import undo from '../assets/editor-icons/undo.png';
import redo from '../assets/editor-icons/redo.png';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';

export default function useTextEditor() {
   const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
   );
   const onEditorStateChange = (editorState) => {
      setEditorState(editorState);
   };

   //!insert content into draft js
   const displayInEditor = (data = '') => {
      let { contentBlocks, entityMap } = htmlToDraft(data);
      let contentState = ContentState.createFromBlockArray(
         contentBlocks,
         entityMap
      );
      setEditorState(EditorState.createWithContent(contentState));
   };
   //convert text editor content to HTML to save it
   const convertToHTML = () => {
      const rawContentState = convertToRaw(editorState.getCurrentContent());
      const html = draftToHtml(rawContentState);
      return html;
   };
   //to upload images from local machines
   //must use a state to store locally uploaded images
   //so they survive refreshes
   const [uploadedImage, setUploadedImage] = useState([]);
   const uploadImageCallback = (file) => {
      // long story short, every time we upload an image, we
      // need to save it to the state so we can get it's data
      // later when we decide what to do with it.
      let LocallyUploadedImages = uploadedImage;
      const imageObject = {
         file: file,
         localSrc: URL.createObjectURL(file),
      };

      LocallyUploadedImages.push(imageObject);
      setUploadedImage(LocallyUploadedImages);
      // setUploadedImages(LocallyUploadedImages);
      // We need to return a promise with the image src
      // the img src we will use here will be what's needed
      // to preview it in the browser. This will be different than what
      // we will see in the index.md file we generate.
      return new Promise((resolve, reject) => {
         resolve({ data: { link: imageObject.localSrc } });
      });
   };
   
   const toolbarOptions = {
      //selecting which options to show in the toolbar
      options: ['history', 'inline', 'image'],
      inline: {
         className: 'rdw-inline-wrapper',
         options: ['bold', 'italic', 'underline'],
         bold: { icon: bold },
         italic: { icon: italic },
         underline: { icon: underline },
      },
      history: {
         className: 'rdw-history-wrapper',
         undo: { icon: undo },
         redo: { icon: redo },
      },
      image: {
         className: 'rdw-image-wrapper',
         //the callback fn is essential to upload images locally
         //otherwise only uploading using URLs is available.
         uploadCallback: uploadImageCallback,
      },
   };
   return {
      editorState,
      toolbarOptions,
      onEditorStateChange,
      displayInEditor,
      convertToHTML,
   };
}

// const insertText = (editorState, text) => {
//    const currentContent = editorState.getCurrentContent();
//    const firstBlock = currentContent.getFirstBlock();
//    const lastBlock = currentContent.getLastBlock();
//    const currentSelection = new SelectionState({
//       anchorKey: firstBlock.getKey(),
//       anchorOffset: 0,
//       focusKey: lastBlock.getKey(),
//       focusOffset: lastBlock.getLength(),
//       hasFocus: true,
//    });

//    const newContent = Modifier.replaceText(
//       currentContent,
//       currentSelection,
//       text
//    );
//    const newEditorState = EditorState.push(
//       editorState,
//       newContent,
//       'insert-characters'
//    );

//    return EditorState.forceSelection(
//       newEditorState,
//       newContent.getSelectionAfter()
//    );
// };

// // !sending chatGPT  to the editor to be displayed
// const sendTextToEditor = (editorState, text) => {
//    const currentContent = editorState.getCurrentContent();
//    const firstBlock = currentContent.getFirstBlock();
//    const lastBlock = currentContent.getLastBlock();
//    const currentSelection = new SelectionState({
//       anchorKey: firstBlock.getKey(),
//       anchorOffset: 0,
//       focusKey: lastBlock.getKey(),
//       focusOffset: lastBlock.getLength(),
//       hasFocus: true,
//    });

//    const newContent = Modifier.replaceText(
//       currentContent,
//       currentSelection,
//       text
//    );
//    const newEditorState = EditorState.push(
//       editorState,
//       newContent,
//       'insert-characters'
//    );
//    const finalState = EditorState.forceSelection(
//       newEditorState,
//       newContent.getSelectionAfter()
//    );
//    setEditorState(finalState);
// };

import { EditorState, Modifier } from 'draft-js';
import { useState } from 'react';
import { stateToHTML } from 'draft-js-export-html';

// toolbar icons
import bold from '../assets/editor-icons/bold.png';
import italic from '../assets/editor-icons/italic.png';
import underline from '../assets/editor-icons/underline.png';
import undo from '../assets/editor-icons/undo.png';
import redo from '../assets/editor-icons/redo.png';

export default function useTextEditor() {
   const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
   );

   const sendTextToEditor = (editorState, text) => {
      setEditorState(insertText(editorState, text));
   };

   const insertText = (editorState, text) => {
      const currentContent = editorState.getCurrentContent();
      const currentSelection = editorState.getSelection();
      const newContent = Modifier.replaceText(
         currentContent,
         currentSelection,
         text
      );
      const newEditorState = EditorState.push(
         editorState,
         newContent,
         'insert-characters'
      );
      return EditorState.forceSelection(
         newEditorState,
         newContent.getSelectionAfter()
      );
   };

   //convert text editor content to HTML to save it
   let contentState = editorState.getCurrentContent();
   const convertToHTML = () => {
      let html = stateToHTML(contentState);
      return html;
   };
   //to upload images from local machines
   const uploadImageCallback = (file) => {
      // long story short, every time we upload an image, we
      // need to save it to the state so we can get it's data
      // later when we decide what to do with it.
      let LocallyUploadedImages = [];
      const imageObject = {
         file: file,
         localSrc: URL.createObjectURL(file),
      };

      LocallyUploadedImages.push(imageObject);
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
      contentState,
      setEditorState,
      sendTextToEditor,
      convertToHTML,
   };
}

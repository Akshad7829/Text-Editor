
import React, { useState } from 'react';
import {EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import Text from 'react-text-typing';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
  import htmlToDraft from 'html-to-draftjs';
import ReactFileReader from 'react-file-reader';
import Save from './save.js'
import './styles.css';
const App = () => {

  const [editorState, setEditorState] = useState();

 const onEditorStateChange =() =>{
   setEditorState.createEmpty();
 };
  return (
    <div className="App">
       <Text
    text="Text-Mate"
    showBlink={true}
    component="h1"
    className="App-header"
  />



      <Editor editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbarClassName="toolbarClassName"
         wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
         id="input"

         placeholder=<em>Start typing from here....</em> />
     

           

  <p className="foot"> Made With 🧡<br/> By Akshad Nayakwadi</p>
  </div>
);
}
export default App;

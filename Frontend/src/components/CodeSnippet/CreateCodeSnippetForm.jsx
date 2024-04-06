import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
//import { TINYMCE_KEY } from '../../config';

const CreateCodeSnippetForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, code });
    setTitle('');
    setCode('');
  };

  return (
    <>
      <h1 className="text-lg text-center font-semibold my-10">Creer un nouveau Code Snippet</h1>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto w-10/12 flex flex-col text-gray-800 p-4 shadow-lg max-w-2xl">
          <input className="title bg-gray-100 p-2 mb-4 appearance-none rounded-none rounded-t-md border border-grey500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" spellcheck="false" placeholder="Titre" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          {/*<textarea
            id="editor" 
            className="description bg-gray-100 sec p-3 h-60 appearance-none rounded-none rounded-t-md border border-grey500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
            spellcheck="false" 
            placeholder="Entrer votre code ici" 
            value={code} 
            onChange={(e) => setCode(e.target.value)} 
          />*/}

          <Editor
           // apiKey={TINYMCE_KEY}
            selector="textarea"
            textareaName="codeSnippet"
            onEditorChange={(newValue, editor) => {
              setCode(newValue);
              setText(editor.getContent({format: 'text' }));
            }}
            onInit={(event, editor) => {
              setText(editor.getContent({ format: 'text' }));
            }}
            init={{
              height: 300,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
                'codesample'
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | codesample'
            }}
          />
          
          <div className="relative text-white focus-within:text-whit flex flex-row justify-center mt-5">
            <div className="btn p-1 px-4 cursor-pointer text-gray-200 ml-2 bg-Blueviolet rounded-md" id="moreAbout" type="submit">Enregistrer</div>
          </div>
        </div>
        
      </form>
    </>    
  );
};

export default CreateCodeSnippetForm;
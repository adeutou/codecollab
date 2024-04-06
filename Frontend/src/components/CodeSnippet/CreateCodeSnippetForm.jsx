import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TINYMCE_KEY } from '../../config';

const CreateCodeSnippetForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [text, setText] = useState('');  
  const [language, setLanguage] = useState(''); 
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/codesnippets/create', {
        title,
        code,
        language
      });
      onSubmit({ title, code });
      setTitle('');
      setCode('');
      setLanguage('');
      navigate("/codesnippet/");
    } catch (error) {
      console.error('Erreur survenue lors de la creation du code snippet:', error);
    } 
    navigate("/codesnippet/");
  };

  return (
    <>
      <h1 className="text-lg text-center font-semibold my-10">Creer un nouveau Code Snippet</h1>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto w-10/12 flex flex-col text-gray-800 p-4 shadow-lg max-w-2xl">
          <input className="title bg-gray-100 p-2 mb-4 appearance-none rounded-none rounded-t-md border border-grey500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" spellcheck="false" placeholder="Titre" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <select
            className="language bg-gray-100 p-2 mb-4 appearance-none rounded-none rounded-t-md border border-grey500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="html/xml">HTML/XML</option>
            <option value="javascript">JavaScript</option>
            <option value="css">CSS</option>
            <option value="php">PHP</option>
            <option value="ruby">Ruby</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="c">C</option>
            <option value="c#">C#</option>
            <option value="c++">C++</option>
          </select>

          <Editor
            apiKey={TINYMCE_KEY}
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
            <button
                className="btn p-1 px-4 cursor-pointer text-gray-200 ml-2 bg-Blueviolet rounded-md"
                type="submit"
              >
                Enregistrer
            </button>
          </div>
        </div>
        
      </form>
    </>    
  );
};

export default CreateCodeSnippetForm;
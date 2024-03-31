import React, { useState } from 'react';

const CreateCodeSnippetForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, code });
    setTitle('');
    setCode('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Enter your code here" value={code} onChange={(e) => setCode(e.target.value)} />
        <button type="submit">Create Snippet</button>
      </div>
      
    </form>
  );
};

export default CreateCodeSnippetForm;
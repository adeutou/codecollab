import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom'

const CodeSnippet = () => {
  const [codeSnippets, setCodeSnippets] = useState([]);

  useEffect(() => {
    const fetchCodeSnippets = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/codesnippets/show');
        setCodeSnippets(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des code snippets:', error);
      }
    };

    fetchCodeSnippets();
  }, []);

  return (
    <>
        <Link to="/codesnippet/create">Create a Code Snippet</Link>
        <ul>
        {codeSnippets.map((snippet) => (
          <li key={snippet._id}>
            <h2>{snippet.title}</h2>
            <pre className='code-snippet'>{snippet.code}</pre>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CodeSnippet
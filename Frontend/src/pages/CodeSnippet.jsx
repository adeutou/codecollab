import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CodeSnippet = () => {
  const [codeSnippets, setCodeSnippets] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [filteredCodeSnippets, setFilteredCodeSnippets] = useState([]);

  useEffect(() => {
    const fetchCodeSnippets = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/codesnippets/show"
        );
        setCodeSnippets(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des code snippets:",
          error
        );
      }
    };

    fetchCodeSnippets();
  }, []);

  useEffect(() => {
    if (selectedLanguage) {
      const filteredSnippets = codeSnippets.filter(
        (snippet) => snippet.language === selectedLanguage
      );
      setFilteredCodeSnippets(filteredSnippets);
    } else {
      setFilteredCodeSnippets(codeSnippets);
    }
  }, [selectedLanguage, codeSnippets]);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center text-Blueviolet font-bold mb-4">
        Liste des Code Snippets
      </h1>
      <div className="mb-4">
        <label htmlFor="language" className="block mb-2">
          Filtrer par langage :
        </label>
        <select
          id="language"
          className="bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="">Tous les langages</option>
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
          {/* Ajoutez d'autres options pour d'autres langages si nécessaire */}
        </select>
      </div>
      <Link
        to="/codesnippet/create"
        className="inline-block mb-4 text-BlueViolet px-4 py-2"
      >
        Créer un Code Snippet
      </Link>
      <ul>
        {filteredCodeSnippets.map((snippet) => (
          <li key={snippet._id} className="border-b border-gray-200 py-4">
            <h2 className="text-lg text-Blueviolet font-semibold mb-2">{snippet.title}</h2>
            <pre
              id="code-snippet"
              className="overflow-x-auto bg-gray-100 p-4"
              dangerouslySetInnerHTML={{ __html: snippet.code }}
            ></pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodeSnippet;

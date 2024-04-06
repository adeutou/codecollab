const CodeSnippet = require('../models/codeSnippetModel');

// Créer un snippet de code
exports.createCodeSnippet = async (req, res) => {
  try {
    const { title, code, language } = req.body;
    const codeSnippet = await CodeSnippet.create({ title, code, language });
    res.status(201).json(codeSnippet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Récupérer tous les snippets de code
exports.getAllCodeSnippets = async (req, res) => {
  try {
    const codeSnippets = await CodeSnippet.find();
    res.status(200).json(codeSnippets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Récupérer un seul snippet de code par ID
exports.getSingleCodeSnippet = async (req, res) => {
    try {
      const codeSnippet = await CodeSnippet.findById(req.params.id);
      if (!codeSnippet) {
        return res.status(404).json({ message: 'Code snippet not found' });
      }
      res.status(200).json(codeSnippet);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Mettre à jour un snippet de code par ID
  exports.updateCodeSnippet = async (req, res) => {
    try {
      const { title, code } = req.body;
      const updatedCodeSnippet = await CodeSnippet.findByIdAndUpdate(req.params.id, { title, code, updated_at: Date.now() }, { new: true });
      if (!updatedCodeSnippet) {
        return res.status(404).json({ message: 'Code snippet not found' });
      }
      res.status(200).json(updatedCodeSnippet);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Supprimer un snippet de code par ID
  exports.deleteCodeSnippet = async (req, res) => {
    try {
      const deletedCodeSnippet = await CodeSnippet.findByIdAndDelete(req.params.id);
      if (!deletedCodeSnippet) {
        return res.status(404).json({ message: 'Code snippet not found' });
      }
      res.status(200).json({ message: 'Code snippet deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
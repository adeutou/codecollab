const express = require('express');
const router = express.Router();
const codeSnippetController = require('../controllers/codeSnippetController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

// Créer un snippet de code (requiert l'authentification et le statut d'administrateur)
router.post('/codesnippets/create', codeSnippetController.createCodeSnippet);

// Récupérer tous les snippets de code (requiert l'authentification)
router.get('/codesnippets/show', codeSnippetController.getAllCodeSnippets);

// Récupérer un seul snippet de code par ID (requiert l'authentification)
router.get('/codesnippets/:id', isAuthenticated, codeSnippetController.getSingleCodeSnippet);

// Mettre à jour un snippet de code par ID (requiert l'authentification et le statut d'administrateur)
router.put('/codesnippets/upadte/:id', isAuthenticated, isAdmin, codeSnippetController.updateCodeSnippet);

// Supprimer un snippet de code par ID (requiert l'authentification et le statut d'administrateur)
router.delete('/codesnippets/delete/:id', isAuthenticated, isAdmin, codeSnippetController.deleteCodeSnippet);

module.exports = router;
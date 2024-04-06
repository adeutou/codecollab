const mongoose = require('mongoose');

const codeSnippetSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    }
  });
  
  module.exports = mongoose.model('CodeSnippet', codeSnippetSchema);
import React, { useState } from "react";
import axios from "axios";

const CreateVideoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoId, setVideoId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/tuto/create", {
        title,
        description,
        videoId,
      });
      // Gérer la réponse de l'API comme nécessaire
      onSubmit({ title, description, videoId }); // Appeler la fonction onSubmit après la création
      setTitle("");
      setDescription("");
      setVideoId("");
    } catch (error) {
      // Gérer les erreurs de la requête
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded px-2 py-1 focus:outline-blue-500 focus:ring-blue-500"
        required
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded px-2 py-1 focus:outline-blue-500 focus:ring-blue-500"
        required
        rows="4"
      />
      <label htmlFor="videoId">YouTube Video ID:</label>
      <input
        type="text"
        id="videoId"
        value={videoId}
        onChange={(e) => setVideoId(e.target.value)}
        className="border rounded px-2 py-1 focus:outline-blue-500 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-700"
      >
        Create Video
      </button>
    </form>
  );
};

export default CreateVideoForm;

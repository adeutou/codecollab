import React, { useState, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import { useSelector } from "react-redux";
import { Box, Container, Grid } from "@mui/material";
import CreateVideoForm from "./CreateVideoForm";
const VideoList = () => {
  const [videos, setVideos] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const postsPerPage = 6;



 const [filteredPosts, setFilteredPosts] = useState([]);
 const [searchQuery, setSearchQuery] = useState("");
const { userInfo } = useSelector((state) => state.signIn);
 const pageNumbers = [];
 for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
   pageNumbers.push(i);
 }
 const handleSearchChange = (event) => {
   setSearchQuery(event.target.value);
 };

 const filterPosts = (video, searchQuery) => {
   return video.filter((video) => {
     return (
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       video.description.toLowerCase().includes(searchQuery.toLowerCase())
     );
   });
 };

 useEffect(() => {
   const filtered = filterPosts(videos, searchQuery);
   setFilteredPosts(filtered);
 }, [searchQuery, videos]);




  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch("/api/tuto/show");
      const data = await response.json();
      setVideos(data.data);
    };

    fetchVideos();
  }, []);

  const handleVideoClick = (videoId) => {
    // Navigate to YouTube video page in a new tab (optional)
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };


const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container mx-auto flex items-center justify-between py-4">
        <h1 className="text-xl font-bold text-gray-900">Liste des Tutoriels</h1>
        <div className="relative flex items-center ">
          <input
            className="rounded-lg px-4 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-Blueviolet-400 text-Blueviolet-500 placeholder-Blueviolet-300 bg-white shadow-md sm:text-sm w-full"
            placeholder="Rechercher un Tuto..."
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {userInfo ? (
          <CreateVideoForm />
        ) : (
          <>
            <h1 className="text-xl font-bold text-Blueviolet">
              Connectez-vous pour créer un Tuto
            </h1>
          </>
        )}
      </div>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
          <Container sx={{ pt: 5, pb: 5, minHeight: "83vh" }}>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
              {currentPosts.map((video) => (
                <div
                  key={video._id}
                  className="rounded overflow-hidden shadow-md"
                >
                  <div className="p-4 bg-white">
                    <h5
                      className="text-Blueviolet font-bold hover:text-blue-500 cursor-pointer"
                      onClick={() => handleVideoClick(video.videoId)}
                    >
                      {video.title}
                    </h5>
                    <p className="text-gray-600 text-sm">{video.description}</p>
                  </div>
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </Box>
        <div className="flex justify-center mt-4">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 mx-2 rounded-full font-medium text-Blueviolet bg-indigo-100 hover:bg-indigo-200 focus:ring-4 focus:ring-Blueviolet focus:outline-none transition-colors duration-200 ${
                currentPage === number ? "bg-white text-Blueviolet" : ""
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </Box>
    </>
  );
};

export default VideoList;




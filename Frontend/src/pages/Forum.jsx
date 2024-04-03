import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Box, Container, Grid } from "@mui/material";
import axios from "axios";
import moment from "moment";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import CreatePost from "../admin/CreatePost";

const Forum = ({ showPostss }) => {
  const { userInfo } = useSelector((state) => state.signIn);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterPosts = (posts, searchQuery) => {
    return posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  };

  useEffect(() => {
    const filtered = filterPosts(posts, searchQuery);
    setFilteredPosts(filtered);
  }, [searchQuery, posts]);

  const showPosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/posts/show");
      setPosts(data.posts);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  

  useEffect(() => {
    showPosts();
  }, []);

  

  

  

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="bg-blueviolet w-full shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4">
          <h1 className="text-xl font-bold text-gray-900">Liste des posts</h1>
          <div className="relative flex items-center ">
            <input
              className="rounded-lg px-4 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-Blueviolet-400 text-Blueviolet-500 placeholder-Blueviolet-300 bg-white shadow-md sm:text-sm w-full"
              placeholder="Rechercher un post..."
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {userInfo ? (
            <CreatePost  />
          ) : (
            <>
              <h1 className="text-xl font-bold text-Blueviolet">
                Connectez-vous pour créer un Post
              </h1>
            </>
          )}
        </div>
      </div>

      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        <Container sx={{ pt: 5, pb: 5, minHeight: "83vh" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {loading ? (
                <Loader />
              ) : (
                currentPosts.map((post, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <PostCard
                      id={post._id}
                      title={post.title}
                      content={post.content}
                      subheader={moment(post.createdAt).format("MMMM DD, YYYY")}
                      comments={post.comments.length}
                      showPosts={showPosts}
                    />
                  </Grid>
                ))
              )}
            </Grid>
          </Box>
        </Container>
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

export default Forum;

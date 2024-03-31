import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Box, Container, Grid } from "@mui/material";
import axios from "axios";
import moment from "moment";
import Loader from "../components/Loader";
import { io } from "socket.io-client";

import { useSelector } from "react-redux";
import CreatePost from "../admin/CreatePost";
const socket = io("/", {
  reconnection: true,
});

const Forum = () => {
  const { userInfo } = useSelector((state) => state.signIn);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postAddLike, setPostAddLike] = useState([]);
  const [postRemoveLike, setPostRemoveLike] = useState([]);

  //display posts

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

  

  let uiPosts =
    postAddLike.length > 0
      ? postAddLike
      : postRemoveLike.length > 0
      ? postRemoveLike
      : posts;

  return (
    <>
      <div className=" bg-white w-full shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4">
          <h1 className="text-xl font-bold text-gray-900">Liste des posts</h1>
          {userInfo ? (
<CreatePost/>

          ) : (
            <>
              {" "}
              <h1 className="text-xl font-bold text-Blueviolet">
                Connecter vous pour creer un Post
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
                uiPosts.map((post, index) => (
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
      </Box>
    </>
  );
};

export default Forum;





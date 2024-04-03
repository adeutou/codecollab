import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { toast } from "react-toastify";
import CommentList from "../components/CommentList";
import { io } from "socket.io-client";
import { EmojiObjectsOutlined } from "@mui/icons-material";




const socket = io("/", {
  reconnection: true,
});

const SinglePost = () => {
  const { userInfo } = useSelector((state) => state.signIn);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [commentsRealTime, setCommentsRealTime] = useState([]);

  const { id } = useParams();
  //fetch single post
  const displaySinglePost = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/api/post/${id}`);
      // console.log(data)
      setTitle(data.post.title);
      setContent(data.post.content);
      setCreatedAt(data.post.createdAt);
      setLoading(false);
      setComments(data.post.comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displaySinglePost();
  }, []);

  useEffect(() => {
    // console.log('SOCKET IO', socket);
    socket.on("new-comment", (newComment) => {
      setCommentsRealTime(newComment);
    });
  }, []);

  // add comment
  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/comment/post/${id}`, { comment });
      if (data.success === true) {
        setComment("");
        toast.success("comment added");

        displaySinglePost();
        socket.emit("comment", data.post.comments);
      }
      //console.log("comment post", data.post)
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  let uiCommentUpdate =
    commentsRealTime.length > 0 ? commentsRealTime : comments;

  return (
    <>
      <Box
        sx={{
          bgcolor: "#fafafa",
          display: "flex",
          justifyContent: "center",
          pt: 4,
          pb: 4,
          minHeight: "100vh",
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            <Card sx={{ width:1000, height: "100%" }}>
              <CardHeader
                className="text-Blueviolet"
                title={title}
                subheader={moment(createdAt).format("MMMM DD, YYYY")}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <Box
                    component="span"
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></Box>
                </Typography>
                <Divider variant="inset" />
                {/* add coment list */}
                {comments.length === 0 ? (
                  ""
                ) : (
                  <Typography variant="h5" sx={{ pt: 3, mb: 2 }}>
                    Commentaires:
                  </Typography>
                )}

                {uiCommentUpdate.map((comment) => (
                  <CommentList
                    key={comment._id}
                    name={comment.postedBy.name}
                    text={comment.text}
                  />
                ))}

                {userInfo ? (
                  <>
                    <Box sx={{ pt: 1, pl: 3, pb: 3, bgcolor: "#fafafa" }}>
                     
                      <form onSubmit={addComment}>
                       
                        <div className="flex flex-col w-full mt-4">
                          <div className="relative rounded-md border border-Blueviolet p-4">
                            <textarea
                              className="w-full resize-none focus:outline-none focus:ring focus:ring-indigo-200"
                              placeholder="Ajoutez votre commentaire..."
                              rows="4"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            />
   </div>
                        </div>
                        <Box sx={{ pt: 4 }}>
                          <button
                            type="submit"
                            className="
   rounded-md 
  
  px-2.5 
  py-1.5 
  text-sm 
  font-semibold 
  text-white 
  shadow-sm 
  transition-all 
  duration-300 
  ease-in-out 
  bg-Blueviolet hover:text-black hover:bg-semiblueviolet
  focus-visible:outline 
  focus-visible:outline-2 
  focus-visible:outline-offset-2 
  focus-visible:outline-indigo
"
                          >
                            Comment
                          </button>
                        </Box>
                      </form>
                    </Box>
                  </>
                ) : (
                  <>
                    <Link className="text-Blueviolet" to="/forum">
                      Connecter vous pour commenter
                    </Link>
                  </>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </Box>
    </>
  );
};

export default SinglePost;

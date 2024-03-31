import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CommentIcon from "@mui/icons-material/Comment";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PostCard = ({ id, title, subheader, content, comments, showPosts }) => {
  const { userInfo } = useSelector((state) => state.signIn);

  return (
    <Card sx={{ width: 320, height: 170 }}>
      <Link to={`/post/${id}`}>
        <CardHeader
          className="text-Blueviolet"
          title={title}
          subheader={subheader}
        />
        {/* <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Box
              sx={{
                width: "100",
              }}
              component="span"
              dangerouslySetInnerHTML={{
                __html: content.split(" ").slice(0, 10).join(" ") + "...",
              }}
            ></Box>
          </Typography>
        </CardContent> */}
      </Link>
      <CardActions>
        <Box
          sx={{
            width: "100",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            {comments}
            <IconButton aria-label="comment">
              <CommentIcon className="text-Blueviolet" />
            </IconButton>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};

export default PostCard;

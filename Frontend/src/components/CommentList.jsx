import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import {images} from '../constants'

import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const CommentList = ({ name, text }) => {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <img
              className="w-10 h-10 rounded-full mr-4 object-cover"
              alt="Remy Sharp"
              src={images.com}
            />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {text}
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </>
  );
};

export default CommentList;

const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoId: String, // ID of the YouTube video
});





module.exports = mongoose.model("Video", videoSchema);

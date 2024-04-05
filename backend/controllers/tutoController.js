const Video = require("../models/tutoModel");

exports.createVideo = async (req, res) => {
  try {
    const video = new Video(req.body);
    await video.save();
    res.status(201).json({ success: true, data: video });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to create video" });
  }
};

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json({ success: true, data: videos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to get videos" });
  }
};

// exports.getVideoById = async (req, res) => {
//   try {
//     const video = await Video.findById(req.params.id);
//     if (!video) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Video not found" });
//     }
//     res.status(200).json({ success: true, data: video });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Failed to get video" });
//   }
// };

// exports.updateVideo = async (req, res) => {
//   try {
//     const updatedVideo = await Video.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!updatedVideo) {
//       res.status(404).json({ success: false, message: "Video not found" });
//     } else {
//       res.status(200).json({ success: true, data: updatedVideo });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Failed to update video" });
//   }
// };

// exports.deleteVideo = async (req, res) => {
//   try {
//     const deletedVideo = await Video.findByIdAndDelete(req.params.id);
//     if (!deletedVideo) {
//       res.status(404).json({ success: false, message: "Video not found" });
//     } else {
//       res.status(200).json({ success: true, message: "Video deleted" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Failed to delete video" });
//   }
// };

const express = require("express");
const router = express.Router();
const videoController = require("../controllers/tutoController");

// Routes pour les vidéos
router.post("/tuto/create", videoController.createVideo);
router.get("/tuto/show", videoController.getAllVideos);
//router.get("/:id", videoController.getVideoById);
// router.put("/:id", videoController.updateVideo);
// router.delete("/:id", videoController.deleteVideo);

module.exports = router;

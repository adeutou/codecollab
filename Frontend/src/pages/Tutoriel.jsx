import React, { useState, useEffect } from "react";
import VideoList from "../components/VideoList";

import CreateVideoForm from "../components/CreateVideoForm";

function Tutoriel() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch("/api/videos");
      const data = await response.json();
      setVideos(data.data);
    };

    fetchVideos();
  }, []);

  return (
    <div>
      {/* <h1 className="text-3xl font-bold text-gray-800">Video Storage</h1>
      <CreateVideoForm /> */}
    
          <VideoList videos={videos} />
        
    </div>
  );
}

export default Tutoriel;

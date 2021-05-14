import React, { useEffect, useState } from "react";
import {
  saveTagToLocalStorage,
  clearLocalStorageTags,
  loadTagFromLocalStorage,
} from "../utils/localStorage";
import axiosMain, { KEY } from "./../apis/youtube";

const VideoTags = ({ video, handleVideoSelect, handleVideoTags }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const initialize = async () => {
      const response = await axiosMain.get(
        `videos?part=snippet&id=${video.id.videoId}&key=${KEY}`
      );
      const res = response.data;
      console.log("tag", res);
      setTags(res.items[0].snippet.tags || []);
    };
    initialize();
  }, [video, handleVideoSelect]);

  const handleTagClicked = (tag) => {
    saveTagToLocalStorage(tag);
    handleVideoTags(loadTagFromLocalStorage());
    
  };

  const handleTagClearClicked = () => {
    clearLocalStorageTags();
    handleVideoTags(loadTagFromLocalStorage());
  };

  return (
    <div>
      <div className="ui segment">
        <button className="tagbutton" onClick={handleTagClearClicked}>
          Clear Tags
        </button>
        <br /> <br />
        {tags.map((tag, index) => (
          <button
            className="tagbutton"
            key={index}
            onClick={() => handleTagClicked(tag)}
          >
              {tag}+
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoTags;

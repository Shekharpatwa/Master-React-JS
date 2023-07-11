import React, { useContext } from "react";
import Video from "./Video";
import VideosContext from "../context/VideosContext";
import VideoDispatchContext from "../context/VideoDispatchContext";
import useVideos from "../hooks/Videos";

// const VideoList = ({ videos, dispatch,editVideo }) => {
  const VideoList = ({ editVideo }) => {
    const dispatch = useContext(VideoDispatchContext);
    // const videos = useContext(VideosContext);
    const videos = useVideos();
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          name={video.name}
          dispatch={dispatch}
          id={video.id}
          editVideo={editVideo}
        ></Video>
      ))}
    </>
  );
};

export default VideoList;

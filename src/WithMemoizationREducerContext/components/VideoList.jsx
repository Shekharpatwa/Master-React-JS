import React, { useContext } from "react";
import Video from "./Video";
import VideosContext from "../context/VideosContext";
import VideoDispatchContext from "../context/VideoDispatchContext";
import useVideos from "../hooks/Videos";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";

// const VideoList = ({ videos, dispatch,editVideo }) => {
  const VideoList = ({ editVideo }) => {
    const url ="https://my.api.mockaroo.com/video.json?key=5c6d9070";
    const dispatch = useContext(VideoDispatchContext);
    // const videos = useContext(VideosContext);
    const videos = useVideos();
    
  
    useEffect(()=>{
      const getData =async()=>{
        const res = await axios.get(url);
        dispatch({type:'GetData',payload:res.data});
      };
      getData();
    },[dispatch]);

  return (
    <>
      {videos.map((video,i) => (
        <Video
          key={i}
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

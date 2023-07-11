import React, { useContext, useDeferredValue, useTransition } from "react";
import Video from "./Video";
import VideosContext from "../context/VideosContext";
import VideoDispatchContext from "../context/VideoDispatchContext";
import useVideos from "../hooks/Videos";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";
import moreVideos from "../data/newData";
// import videosDB from "./data";

// const VideoList = ({ videos, dispatch,editVideo }) => {
  const VideoList = ({ editVideo }) => {
    const url ="https://my.api.mockaroo.com/video.json?key=5c6d9070";
    const dispatch = useContext(VideoDispatchContext);
    // const videos = useContext(VideosContext);
    // const videos = useVideos();
    const [videos, setVideos] = useState([]);
    const [isPending, startTransition] = useTransition();
    const getVideo =async()=>{
      // const res = await axios.get(url);
      // dispatch({type:'GetData',payload:moreVideos});
      startTransition(()=>{
        setVideos(moreVideos);
      })
    };

    const defVideos = useDeferredValue(videos);

    useEffect(()=>{
      const getData =async()=>{
        const res = await axios.get(url);
        dispatch({type:'GetData',payload:moreVideos});
        // console.log(moreVideos)
      };
      // getData();
    },[dispatch]);

  return (
    <>
    <button onClick={()=>getVideo()}>{isPending ? 'Getting...': 'Get video'}</button>
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

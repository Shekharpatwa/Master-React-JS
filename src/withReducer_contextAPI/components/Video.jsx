import React from "react";
import "./Video.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import useVideoDispatch from "../hooks/VideoDispatch";
// import VideoDispatchContext from "../context/VideoDispatchContext";

// const Video = ({ id, title, name, children, dispatch,editVideo }) => {
  const Video = ({ id, title, name, children,editVideo }) => {
  let videoLink = "https://picsum.photos/id/2/160/90";
  const themeContext = useContext(ThemeContext);
  const dispatch = useVideoDispatch();
  // const dispatch = useContext(VideoDispatchContext);
  return (
    <div className="container">  
      <div className="d-flex flex-column bd-highlight mb-3" key={id}>
        <br />
        <button
          className={`${themeContext} btn btn-secondary btn-sm position-relative btnClose my-1`}
          onClick={() => dispatch({type:'DELETE',payload:id})}
        > X
        </button>

        <button
          className="btn btn-secondary btn-sm position-relative btnClose"
          onClick={() => editVideo(id)}
        >Edit</button>
        <img src={videoLink} />
        <div className="container">
          <span className={`${themeContext}`}>
            {title} - {name} {children}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Video;

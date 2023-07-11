import React,{memo, useContext,useEffect, useRef,useLayoutEffect, useId} from "react";
import "./Video.css";
import ThemeContext from "../context/ThemeContext";
import useVideoDispatch from "../hooks/VideoDispatch";
// import VideoDispatchContext from "../context/VideoDispatchContext";

// const Video = ({ id, title, name, children, dispatch,editVideo }) => {
  const Video = memo(function Video({ id, title, name, children,editVideo }) {
  let videoLink = "https://picsum.photos/id/2/160/90";
  const themeContext = useContext(ThemeContext);
  const dispatch = useVideoDispatch();
  const ref = useRef(null);
  const uID = useId();

  // useLayoutEffect(() => {
  //   const { height } = ref.current.getBoundingClientRect();
  //   console.log(height);
  // }, []);
  // const dispatch = useContext(VideoDispatchContext);
  
  // useEffect(()=>{
  //   const ids = setInterval(() => {
  //     console.log(id);
  //   }, 3000);

  //   return ()=>{
  //    clearInterval(ids);
  //   }
  // },[id]);

  return (
    <div id={uID} ref={ref} className="container">  
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
});

export default Video;

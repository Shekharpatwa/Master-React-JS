import logo from "./logo.svg";
import "./App.css";
import Video from "./components/Video";
import videosDB from "./components/data";
import { useReducer, useState, useContext, useCallback, useRef,lazy,Suspense } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
import Counter from "./components/Counter";
// import Dummy from "./components/Dummy";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState("dark");
  const [show, setShow] = useState(false);
  // const themeContext = useContext(ThemeContext);
  const inputRef = useRef(null);

  function videoReducer(videos, action) {
    switch (action.type) {
      case "GetData":
        return action.payload;

      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];

      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);

      case "UPDATE":
        const index = videos.findIndex((obj) => obj.id === action.payload.id);
        const uVideo = [...videos];
        uVideo.splice(index, 1, action.payload);
        setEditableVideo(null);
        return uVideo;

      default:
        return videos;
    }
  }

  const Dummy = lazy(() => import('./components/Dummy'));
  // console.log({themeContext});

  const [videos, dispatch] = useReducer(videoReducer, videosDB);

  const editVideo= useCallback(function editVideo(id) {
    setEditableVideo(videos.find((p) => p.id === id));
  },[videos])

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App container ${mode}`}>
            <button onClick={()=>inputRef.current.jumpTo()}>Ref Focus</button>
            <button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
              {" "}
              Change Mode
            </button>
            <Counter/>
            <AddVideo ref={inputRef}
			// dispatch={dispatch} 
			editableVideo={editableVideo}
			 />{" "}
            <br />
            <VideoList
              videos={videos}
              // dispatch={dispatch}
              editVideo={editVideo}
            />
            <br />
          </div>
            <button className="btn btn-info" onClick={()=>setShow(!show)}>Show</button>
            {show ? 
              <Suspense fallback={<>Loading.....</>}>
                <Dummy/>
              </Suspense>
              : null}
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

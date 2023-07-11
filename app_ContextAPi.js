import logo from "./logo.svg";
import "./App.css";
import Video from "./components/Video";
import videosDB from './components/data';
import { useReducer, useState,useContext } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";


function App() {
	const [editableVideo, setEditableVideo] = useState(null);
	const [mode, setMode] = useState('dark');
	// const themeContext = useContext(ThemeContext);

	function videoReducer(videos,action){
		switch(action.type){
			case 'ADD':
				return [
					...videos,
					{...action.payload, id: videos.length+1}
				];
			
			case 'DELETE':
				return videos.filter(video=>video.id !==action.payload);

			case 'UPDATE':
				const index = videos.findIndex(obj=>obj.id ===action.payload.id);
				const uVideo = [...videos]
				uVideo.splice(index,1,action.payload);
				setEditableVideo(null)
				return uVideo;

			default:
				return videos;
		}
	}

	// console.log({themeContext});

	const [videos, dispatch] = useReducer(videoReducer,videosDB); 

	function  editVideo(id){
		setEditableVideo(videos.find(p=>p.id===id));
	}

return (
	<ThemeContext.Provider value={mode}>
		<div className={`App ${mode}`}>
			<button onClick={()=>setMode(mode ==='dark'? 'light':'dark')}> Change Mode</button>
			{/* <AddVideo addVideos={addVideos} updateVideos={updateVideos} editableVideo={editableVideo}/> <br /> */}

			<AddVideo dispatch={dispatch}  editableVideo={editableVideo}/> <br />
			<VideoList videos={videos} dispatch={dispatch} editVideo={editVideo}/>	
		</div>
	</ThemeContext.Provider>
);
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import logo from "./logo.svg";
import "./App.css";
import Video from "./components/Video";
import videosDB from './components/data';
import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";


function App() {
	const [videos, setVideos] = useState(videosDB);

	function addVideos(video){
		setVideos([
			...videos,
			{...video, id: videos.length+1}
		]);
	}

return (
	<div className="App">
	<AddVideo addVideos={addVideos}/> <br />
	<VideoList videos={videos}/>

	
	{/* <div>Form</div> */}
	{/* <Counter/> */}
	<br />
	{/* <div>
		<button onClick={()=>{
			setVideos([...videos,{
				id:videos.length+1,
				title:"NextJs",
				name:`Dev ${videos.length+1}`
			}]);
		}}> Add video</button>
		<br />
	</div> */}
		<br />
		{/* <div> */}
			
		{/* </div> */}
	{/* <Video {...videos}/> */}
	
	</div>
);
}

export default App;

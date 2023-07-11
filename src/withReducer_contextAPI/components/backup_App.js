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
import Products from "./components/Products";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AddProduct from "./components/AddProduct";

function App() {
	// const [form, setForm] = useState({});
	// const handleInput=(e)=>{
	// 	e.preventDefault();
	// 	setForm({
	// 		...form, 
	// 		[e.target.name]:e.target.value
	// 	});
	// };
	// const [usersData, setUsersData] = useState([]);

	// const handleSubmit = async(e)=>{
	// 	e.preventDefault();
	// 	const apiCall = await fetch('http://localhost:8080/testDemo',{
	// 		method:"POST",
	// 		body:JSON.stringify(form),
	// 		headers:{
	// 			'Content-Type':"application/json"
	// 		}
	// 	});
	// 	const resp = await apiCall.json();
	// 	setForm({});
	// 	getUsersList();
	// }

	// const getUsersList = async()=>{
	// 	const apiCall = await fetch('http://localhost:8080/getData',{
	// 		method:"get"
	// 	});
	// 	const resp = await apiCall.json();
	// 	setUsersData(resp);
	// }

	// useEffect(()=>{
	// 	getUsersList();
	// },[]);
	const [videos, setVideos] = useState(videosDB);
return (
	<div className="App">
	
	{/* <div>Form</div> */}
	{/* <Counter/> */}
	{/* <br /> */}
	{/* <div>
		<button onClick={()=>{
			setVideos([...videos,{
				id:videos.length+1,
				title:"NextJs",
				name:`Dev ${videos.length+1}`
			}]);
		}}> Add video</button>
	</div> */}
		<br />
		{/* <div> */}
			{/* {
				videos.map(video=><Video key={video.id} title={video.title} name={video.name}>{video.name}</Video>)
			} */}
		{/* </div> */}
	{/* <Video {...videos}/> */}
	{/* <Products/> */}

		<Router>
		<ul className="d-flex-inline">
              <li>
                <Link to="/Video.jsx">Videos</Link>
              </li>
              <li>
                <Link to="/Products.jsx">Products</Link>
              </li>
              <li>
                <Link to="/AddProduct.jsx">AddProduct</Link>
              </li>
            </ul>
			<Routes>
				<Route exact path='/Video.jsx' element={<Video/>}></Route>
				<Route exact path='/Products.jsx' element={<Products/>}></Route>
				<Route exact path='/AddProduct.jsx' element={<AddProduct/>}></Route>
			</Routes>
		</Router>
	
	
	{/* <form onSubmit={handleSubmit}>
		<label htmlFor="userName"> UserName</label> 
		<input type="text" onChange={handleInput} name="userName"/>
		<br />
		<label htmlFor="password"> Password</label> 
		<input type="text" onChange={handleInput} name="password"/>
		<button type="submit">Submit</button>
	</form>
	
	<div>
		<select name="List" id="Lists"> Users
			{
				usersData.map((obj,index)=>{
					return <option key={index} value={obj.id}>{obj.username}</option>
				})
			}
		</select>
	</div> */}
	</div>
);
}

export default App;

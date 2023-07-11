import React,{useEffect, useState,useRef} from 'react';
import { useContext } from 'react';
import useVideoDispatch from '../hooks/VideoDispatch';
import { useReducer } from 'react';
// import VideoDispatchContext from '../context/VideoDispatchContext';
const initialState = {title:"",name:""};

const AddVideo = ({editableVideo}) => {
// const AddVideo = ({dispatch,editableVideo}) => {
    const [video, setVideo] = useState(initialState);
    // const dispatch = useContext(VideoDispatchContext);
    let inputRef = useRef(null);
    const dispatch = useVideoDispatch();
    const handleChange =(e)=>{
        setVideo({
            ...video,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(editableVideo){
            dispatch({type:'UPDATE',payload:video});
        }else{
            dispatch({type:'ADD',payload:video});
        }
        setVideo(initialState);
    }

    useEffect(()=>{
        if(editableVideo){
            setVideo(editableVideo);
        }
        inputRef.current.focus();
    },[editableVideo]);
  return (
    <div className='m-3'>
        <form>
            <label htmlFor="Title" className="form-label">Title: </label> 
            <input ref={inputRef} type="text" className="form-control" value={video.title} name="title" id="Title" onChange={handleChange}/> <br />

            <label htmlFor="Name" className="form-label">Name :</label>
            <input type="text" className="form-control" value={video.name} name="name" id='Name' onChange={handleChange}/> <br />
            <button type="button" className='btn btn-primary' onClick={handleSubmit}>{editableVideo ? 'Edit Video' : "Add Video"}</button>
        </form>
    </div>
  )
}

export default AddVideo
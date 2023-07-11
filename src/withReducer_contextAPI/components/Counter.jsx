import React,{useState} from 'react'

const Counter = () => {
  const [number, setNumber] = useState(0);
  const handleAdd=(e)=>{
    e.stopPropagation();
    setNumber(number=>number+1);
  }
  return (
    <div>
      <h3>{number}</h3>
        <button onClick={handleAdd}> ADD </button>
    </div>
  )
}

export default Counter
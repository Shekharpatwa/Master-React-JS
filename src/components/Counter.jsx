import React,{useState} from 'react'
import { useCallback } from 'react';
import { useMemo } from 'react';
import { useRef } from 'react';
import { flushSync } from 'react-dom';


const Counter = () => {
  const [number, setNumber] = useState(4);
  let num = useRef(0);

  const handleAdd=(e)=>{
    e.stopPropagation();
    flushSync(()=>{
      setNumber(number=>number+1);
      setNumber(number=>number+1);
    })
    num.current++;
    console.log(number);
    window.print();
  }

  const fibCallBack = useCallback(function fib(n){
    if(n==1 || n==2){
      return 1;
    }
    return fib(n-1)+fib(n-2);
  },[])

  const fibMemo = useMemo(()=>fibCallBack(number),[number,fibCallBack]);

  return (
    <div>
      <h3>{number} | {fibMemo} </h3>
        <button className='btn btn-success' onClick={handleAdd}> ADD </button>
    </div>
  )
}

export default Counter
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, fetchData, increment } from '../redux/products/action';

function Counter() {
  const {count,data}=useSelector((state)=>state.counter);
  const dispatch=useDispatch();
  const handleIncrease=()=>dispatch(increment());
  const handleDecrease=()=>dispatch(decrement());
  useEffect(()=>{
    dispatch(fetchData())
  },[])
  return (
  <>
    <h2>Counter {count}</h2>
    <button  onClick={handleIncrease}>Increase</button>
    <button onClick={handleDecrease}>Decrease</button></>
  )
}

export default Counter


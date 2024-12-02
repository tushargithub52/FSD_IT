import React, { useState } from 'react'
import "./CounterApp.css"

const CounterApp = () => {

  const [count, setCount] = useState(0)

  return (
    <div className='disp'>
      <h2 className='header'>Count is {count}</h2>
      <div className='buttons'>
        <button onClick={() => { setCount(count + 1) }} className='btn'>Increase count</button>
        <button onClick={() => { setCount(count - 1) }} className='btn'>Decrease count</button>
        <button onClick={() => { setCount(0) }} className='btn'>Reset count</button>
      </div>
    </div>
  )
}

export default CounterApp
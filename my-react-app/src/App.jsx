import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(){

  // const new_var = "I want to learn react"
  // return(
  //   <div>
  //     <h1>welcome to react</h1>
  //     <p>i am new to react</p>
  //     <p>{new_var}</p>
  //   </div>
  // );

  const[count,setcount] = useState(0);

  function increase() {
     setcount(count + 1)
  }

  function decrease(){
    if (count <= 0){
      count=0
      return
    }
          setcount(count - 1)

  }

  function reset(){
    setcount(0)
  }
  function increase_by5(){
    setcount(count+5)
  }
  return (
    <div>
      <h1>Counter APP</h1>
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={increase_by5}>+5</button>
    </div>
  )
}


export default App;
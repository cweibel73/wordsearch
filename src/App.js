import React,{useState} from "react";
import './App.css';
import {letters,words,subject} from "./Games"

function App() {
  const [arr, setArr] = useState([])
  const [found, setFound] = useState(0)
  const [notFound, setNotFound] = useState(5)
  const [foundArr, setFoundArr] = useState([[null]])
  function addIt(letter){
    setArr(prev => [...prev, letter])
  }
  function checkIt(arr,words){
    let sortArr = arr.sort((a,b) => a-b)
    if(words.some(item => JSON.stringify(item.sort((a,b) => a-b))===JSON.stringify(arr))&&
    foundArr.every(item => JSON.stringify(item.sort((a,b) => a-b))!==JSON.stringify(arr))){
      alert("Correct!")
      setFound(prev => prev+1)
      setFoundArr(prev => [...prev, arr])
      setNotFound(prev => prev-1)
    } else {
      alert("Wrong answer or already selected")
    }
    setArr([])
  }
  
  const game = letters.map((item,i) => 
    <button style={{color: foundArr.flat().includes(i)?"blue":"black"
  ,background: arr.includes(i)?"blue":"white"}} className="btn" id={i} onClick={() => {
      addIt(i)
      
    }}>{item}</button>
    )
  return (
    <div className="app">
      <h1>FIND {subject}</h1>
      <h2>Click each letter to select it, then press the Enter button!</h2>
      <h3>{found===words.length?"YOU FOUND THEM ALL!":`Found: ${found} Not Found: ${notFound}`}</h3>
      <div id="game">
        {game}
    </div>
    {found<words.length?<button onClick={() => {checkIt(arr,words)}}>Enter</button>:
    <button onClick={() => window.location.reload(false)}>Play Again!</button>
    }
    </div>
  );
}

export default App;

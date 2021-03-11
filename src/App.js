import React,{useState} from "react";
import './App.css';
import {gletters,gwords,gsubject} from "./Games"
import {fletters, fwords, fsubject} from "./Foods"
import {aletters, awords, asubject} from "./Animals"
import {dletters, dwords, dsubject} from "./Drinks"
import {cletters, cwords, csubject} from "./Colors"

function App() {
  const [arr, setArr] = useState([])
  const [found, setFound] = useState(0)
  const [notFound, setNotFound] = useState(5)
  const [foundArr, setFoundArr] = useState([[null]])
  const [letters,setLetters] = useState(gletters)
  const [words, setWords] = useState(gwords)
  const [subject, setSubject] = useState(gsubject)
  function newGame(l,w,s){
    setLetters(l)
    setWords(w)
    setSubject(s)
    setFound(0)
    setNotFound(5)
    setFoundArr([[null]])
  }
  function addIt(letter){
    setArr(prev => !prev.includes(letter)?[...prev, letter]:
    prev.filter(item => item!==letter))
  }
  function checkIt(arr,words){
    let sortArr = [...arr].sort((a,b) => a-b)
    if(words.some(item => JSON.stringify(item.sort((a,b) => a-b))===JSON.stringify(sortArr))&&
    foundArr.every(item => JSON.stringify(item.sort((a,b) => a-b))!==JSON.stringify(sortArr))){
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
    {found<words.length?<button onClick={() => {checkIt(arr,words)}}>Enter</button>:'SELECT ANOTHER GAME BELOW!'}
    <br /><br />
    <button onClick={() => newGame(fletters,fwords,fsubject)}>Foods</button>
    <button onClick={() => newGame(aletters,awords,asubject)}>Animals</button>
    <button onClick={() => newGame(cletters,cwords,csubject)}>Colors</button>
    <button onClick={() => newGame(dletters,dwords,dsubject)}>Drinks</button>
    <button onClick={() => window.location.reload(false)}>Random Game</button>
    
    </div>
  );
}

export default App;

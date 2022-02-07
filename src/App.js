import './App.css';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import { getWord } from './helpers/util';
import { useState,useEffect,useCallback } from 'react';
function App() {
  const [currentRow,setCurrentRow]=useState(0);
  const [letters,setLetters]=useState([]);
  const [word,setWord]=useState("ahsan");
  const [checkMode,setCheckMode]=useState(false);
  const [typeMode,setTypeMode]=useState(true);
  // useEffect(()=>{
  //   alert(word);
  // },[]);
  
  const handleKeyDown=useCallback((e)=>{
    console.log(e.key);
    if((letters.length +1) % 5 === 0) setTypeMode(false);
    if(e.key === "Backspace"){
      if(typeMode && letters.length % 5 === 0) return;
      setLetters(state=>{
        let newState=[...state];
        newState.pop();
        return newState;     })
        setTypeMode(true);
       
}
    if(e.key === "Enter" && (letters.length %5 === 0)){
      // check row
      setCheckMode(true);
    }
     if(((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) && (typeMode)){
      const letter=e.key.toUpperCase();
      setLetters(state=>{
        let newState=[...state];
        newState.push(letter);
        return newState;
      })
    };
    
    

  },[letters,checkMode,typeMode]);
  useEffect(()=>{
    window.addEventListener("keydown",handleKeyDown);
    return ()=>{
      window.removeEventListener("keydown",handleKeyDown);
    }
  },[handleKeyDown]);
  const nextRow=()=>{
    setCheckMode(false);
    setTypeMode(true);
  }
  

  return (
    <div className="App">
      <Grid letters={letters} currentRow={currentRow} word={word} checkMode={checkMode} nextRow={nextRow}/>
      <Keyboard/>
    </div>
  );
}

export default App;

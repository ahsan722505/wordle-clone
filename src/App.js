import './App.css';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import { getWord } from './helpers/util';
import { useState,useEffect,useCallback } from 'react';
function App() {
  const [currentRow,setCurrentRow]=useState(0);
  const [letters,setLetters]=useState([]);
  const [word,setWord]=useState(getWord());
  useEffect(()=>{
    alert(word);
  },[]);
  
  const handleKeyDown=useCallback((e)=>{
    if(((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) && (letters.length<=4)){
      const letter=e.key.toUpperCase();
      setLetters(state=>{
        let newState=[...state];
        newState.push(letter);
        return newState;
      })
    };
  },[]);
  useEffect(()=>{
    window.addEventListener("keydown",handleKeyDown);
    return ()=>{
      window.removeEventListener("keydown",handleKeyDown);
    }
  },[handleKeyDown]);
  

  return (
    <div className="App">
      <Grid letters={letters} currentRow={currentRow}/>
      <Keyboard/>
    </div>
  );
}

export default App;

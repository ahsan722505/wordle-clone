import styles from "./Grid.module.css";
import { useState } from "react";
import { createGrid } from "../helpers/util";
import { useRef,useEffect } from "react";
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
const Grid=({letters,currentRow,word,checkMode})=>{
    const [grid,setGrid]=useState(createGrid(6,5));
    const [classes,setClasses]=useState(new Array(5).fill(""));
    const wordRef=useRef(word);
    const lettersRef=useRef();
    let colCount=0;
    useEffect(()=>{
        if(!checkMode) return;
            lettersRef.current=letters.join("");
            let updatedClasses=new Array(5).fill("");
            letters.forEach((eachLetter,i)=>{
                if(eachLetter.toLowerCase() === wordRef.current[i]){
                    updatedClasses[i]=styles.correct;
                    wordRef.current= wordRef.current.replaceAt(i,'_');
                    lettersRef.current=lettersRef.current.replaceAt(i,'_');
                }
            })

            letters.forEach((eachLetter,i)=>{
                if(lettersRef.current[i] === '_') return;
                if(wordRef.current.includes(eachLetter.toLowerCase())){
                    updatedClasses[i]=styles.present;
                   wordRef.current= wordRef.current.replace(eachLetter.toLowerCase(),'_');
                }else{
                    updatedClasses[i]=styles.absent;
                }
            })
            setClasses(updatedClasses);

    },[checkMode,letters])
    
    return(
        <div className={styles.grid}>
            {grid.map((eachRow,rowCount)=>{
                return(
                    <div className={styles.row}>
                            {eachRow.map(eachCell=>{
                                return(
                                    <div className={`${styles.cell} ${currentRow === rowCount && classes[colCount]}`}><span>{currentRow === rowCount && letters[colCount++]}</span></div>
                                )
                            })}
                    </div>
                )
            })}
        </div>
    )
}
export default Grid;
import styles from "./Grid.module.css";
import { useState } from "react";
import { createGrid } from "../helpers/util";
import { useRef } from "react";
const Grid=({letters,currentRow,word,checkMode})=>{
    const [grid,setGrid]=useState(createGrid(6,5));
    const wordRef=useRef(word);
    // const eliminate=(letter)=>{
    //     setLocalWord
    // }
    let colCount=0;
    const getStyle=(letterIndex,rowCount)=>{
        console.log(wordRef.current);
        if(!checkMode) return "";
        if(rowCount !== currentRow) return "";
        if(letters[letterIndex] === wordRef.current[letterIndex].toUpperCase()){
            wordRef.current=wordRef.current.replace(letters[letterIndex].toLowerCase(),'_');
            return styles.correct;
        } 
        if(wordRef.current.includes(letters[letterIndex].toLowerCase())){
            wordRef.current=wordRef.current.replace(letters[letterIndex].toLowerCase(),'_');
            return styles.present;
        } 
        return styles.absent;
    }
    return(
        <div className={styles.grid}>
            {grid.map((eachRow,rowCount)=>{
                return(
                    <div className={styles.row}>
                            {eachRow.map(eachCell=>{
                                return(
                                    <div className={`${styles.cell} ${getStyle(colCount,rowCount)}`}><span>{currentRow === rowCount && letters[colCount++]}</span></div>
                                )
                            })}
                    </div>
                )
            })}
        </div>
    )
}
export default Grid;
import styles from "./Grid.module.css";
import { useState } from "react";
import { createGrid } from "../helpers/util";
const Grid=({letters,currentRow})=>{
    const [grid,setGrid]=useState(createGrid(6,5));
    let colCount=0;
    return(
        <div className={styles.grid}>
            {grid.map((eachRow,rowCount)=>{
                return(
                    <div className={styles.row}>
                            {eachRow.map(eachCell=>{
                                return(
                                    <div className={styles.cell}><span>{currentRow === rowCount && letters[colCount++]}</span></div>
                                )
                            })}
                    </div>
                )
            })}
        </div>
    )
}
export default Grid;
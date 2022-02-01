import styles from "./Grid.module.css";
import { useState } from "react";
import { createGrid } from "../helpers/util";
const Grid=()=>{
    const [grid,setGrid]=useState(createGrid(6,5));
    return(
        <div className={styles.grid}>
            {grid.map(eachRow=>{
                return(
                    <div className={styles.row}>
                            {eachRow.map(eachCell=>{
                                return(
                                    <div className={styles.cell}></div>
                                )
                            })}
                    </div>
                )
            })}
        </div>
    )
}
export default Grid;
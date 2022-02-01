import styles from "./Keyboard.module.css";
import { firstKeyboardRow } from "../helpers/util";
import { secondKeyboardRow } from "../helpers/util";
import { thirdKeyboardRow } from "../helpers/util";
const Keyboard=()=>{
    return(
        <div className={styles.keyboard}>
            <div className={styles.row1}>
                {firstKeyboardRow.map(each=> <button className={styles.keyboardButton}><span>{each}</span></button>)}
            </div>
            <div className={styles.row2}>
                {secondKeyboardRow.map(each=> <button className={styles.keyboardButton}><span>{each}</span></button>)}
            </div>
            <div className={styles.row3}>
                {thirdKeyboardRow.map(each=> <button className={styles.keyboardButton}><span>{each}</span></button>)}
            </div>
        </div>
    )
}
export default Keyboard;
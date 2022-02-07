import styles from "./Keyboard.module.css";
import { firstKeyboardRow } from "../helpers/util";
import { secondKeyboardRow } from "../helpers/util";
import { thirdKeyboardRow } from "../helpers/util";
const Keyboard=({handleKeyDown})=>{
    const getAsciiCode=(character)=>{
        if(character === "Enter") return 10;
        if(character === "Backspace") return 8;
        return character.charCodeAt();
    }
    return(
        <div className={styles.keyboard}>
            <div className={styles.row1}>
                {firstKeyboardRow.map(each=> <button onClick={()=> handleKeyDown({key : each, keyCode : each.charCodeAt()})} className={styles.keyboardButton}><span>{each}</span></button>)}
            </div>
            <div className={styles.row2}>
                {secondKeyboardRow.map(each=> <button onClick={()=> handleKeyDown({key : each, keyCode : each.charCodeAt()})} className={styles.keyboardButton}><span>{each}</span></button>)}
            </div>
            <div className={styles.row3}>
                {thirdKeyboardRow.map(each=> <button onClick={()=> handleKeyDown({key : each, keyCode : getAsciiCode(each)})} className={styles.keyboardButton}><span>{each === "Backspace" ? <i class="fas fa-backspace"></i> : each}</span></button>)}
            </div>
        </div>
    )
}
export default Keyboard;
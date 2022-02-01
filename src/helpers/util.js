export const createGrid=(rows,cols)=>{
    let grid=[];
    let currentRow;
    let counter=0;
    for(let i=0; i<rows ; i++){
        currentRow=[];
        for(let j=0 ; j<cols ; j++){
            currentRow.push(counter++);
        }
        grid.push(currentRow);
    }
    return grid;
}
export const firstKeyboardRow=['Q','W','E','R','T','Y','U','I','O','P'];
export const secondKeyboardRow=['A','S','D','F','G','H','J','K','L'];
export const thirdKeyboardRow=["ENTER",'Z','X','C','V','B','N','M',<i class="fas fa-backspace"></i>];
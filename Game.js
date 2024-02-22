
let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#resetbtn")
let Turn0 = true
let decide_X_or_O = true //when X = true, O = false
let newgame = document.querySelector("#Newbtn")
let newmsg = document.querySelector(".win-msg")
let msg = document.querySelector("#msg")
let draw=document.querySelector("#draw")
let count=0

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];




boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('button press')
        // let count = 0
        // for(count=0; count<=4; count++){
        //     console.log("he")
        // }
        if (Turn0 === true) {
            box.innerText = "O"
            box.value="O"
            Turn0 = false
            
        } else {
            
            box.innerText = "X"
            box.value="X"
            
            Turn0 = true
        }
        box.disabled = true;
        count++;
        let isWinner = Winner();

         if (count === 9 && !isWinner) {
             gameDraw();
        }
        // box.style.backgroundColor = "white"
        //  Winner();
        // let boxs=document.getElementsByClassName("box")
        // console.log(boxs.length)
        // if (!won){
        //     let count= 0;
        //     for(let i=0;i<boxs.length;i++){
        //         let value= boxs[i].value;
        //         if(value != ''){
        //             count += 1;
        //         }
        //     }
        //     console.log("Count : ", count)
        //     if(count==9){
        //         console.log("Draw")
        //     }
        // }
    })

})
const gameDraw = () => {
    msg.innerText = "this is a draw match";
    newmsg.classList.remove("hide");
    disableBox();
  };
const restGame = () => {
    Turn0 = true;
    count=0
    enableBox();
    newmsg.classList.add("hide");
}
const disableBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (Winner) => {
    msg.innerText = `winner is , ${Winner}`
    newmsg.classList.remove("hide");
    disableBox()
}

const drawFunction=()=>{
    draw.innerText="GAME DRAW"
}


const Winner = () => {
    let won = false;
    for (let pattern of winPatterns) {
        // console.log([pattern[0]],[pattern[1]],[pattern[2]])
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );
        let posvalue1 = boxes[pattern[0]].innerText
        let posvalue2 = boxes[pattern[1]].innerText
        let posvalue3 = boxes[pattern[2]].innerText
        

        if (posvalue1 != "" && posvalue2 != "" && posvalue3 != "") {
            if (posvalue1 === posvalue2 && posvalue2 === posvalue3) {
                // console.log("winner", posvalue1)
                // let boxs = document.getElementsByClassName("box")
                // console.log(boxs.length)
                // for (let i = 0; i < boxs.length; i++) {
                //     boxs[i].disabled = true;
                //     boxs[i].style.backgroundColor='grey'
                // }
                showWinner(posvalue1);
                won = true;
                break;
                // box.disabled=true;               

            }
        }
        


    }
    // return won;

}

newgame.addEventListener("click", restGame)
resetbtn.addEventListener("click", restGame)


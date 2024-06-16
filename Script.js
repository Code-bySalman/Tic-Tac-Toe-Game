let boxes = document.querySelectorAll(".box");
let Rb = document.querySelector("#btn");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
  boxes.forEach((box)=> {
    box.addEventListener("click", () =>{
        console.log("You clicked the box.")
       if (turnO) {
        box.innerText = "O"
        turnO = false
       }
       else{
       box.innerText = "X"
    turnO = true}
      box.disabled = true;  
      checkwinner();
    });
  });
   const disableBox =()=> {
    for ( box of boxes) {
        box.disabled = true
    }
   }
   const enableBox =()=> {
    for ( box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
   }
   const showWinner= (winner)=>{
      msg.innerText = `Congratulations! The winner is ${winner}`;
      msgContainer.classList.remove("hide");
      disableBox();


   };

  const checkwinner = () =>{
       for ( pattern of winningPattern) {
        let postVal1 = boxes[pattern[0]].innerText;
        let postVal2 = boxes[pattern[1]].innerText;
        let postVal3 = boxes[pattern[2]].innerText;
        if (postVal1 != "" && postVal2 != "" && postVal3 != "") {
            if (postVal1 === postVal2 && postVal2 === postVal3) {
                console.log("winner",postVal1)
                showWinner(postVal1);
            }
        }
       }
  };
  const resetGame = ()=>{
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
  }
  newGameBtn.addEventListener("click", ()=>{
    resetGame();
  })
  Rb.addEventListener("click", ()=>{
    resetGame();
  })
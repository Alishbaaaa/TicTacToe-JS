let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let winner_msg = document.querySelector("#msg");

let turnO = true;

const winning_pattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

let count = 0;
const resetGame = () =>{
    turnO = true; 
    msgContainer.classList.add("hide");
    enableBoxes(); 
    count = 0;

}

resetbtn.addEventListener("click",resetGame);
newgamebtn.addEventListener("click",resetGame);

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO == true)
        {
            box.innerText = "O";
            box.style.color = "#52796F";
            turnO = false;
            count++;
            console.log("count = ",count);
        }
        else
        {
            box.innerText = "X";
            box.style.color = "#CAD2C5"
            turnO = true;
            count++;
            console.log("count = ",count);
        }
    box.disabled = true;   
    checkWinner();
    })
})
const enableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = " ";
    }
}
const disableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    if(winner === 'X' || winner === 'O')
    {
        winner_msg.innerText = "Congratulations, Winner is " + winner;
    }

    else
    {
        winner_msg.innerText = `Game is a ${winner}`;
    }

    msgContainer.classList.remove("hide");
    disableBoxes();
    count = 0;
}

const checkWinner = () => {
    let winner = false;
    for (let pattern of winning_pattern)
    {
       let post0val = boxes[pattern[0]].innerText;
       let post1val = boxes[pattern[1]].innerText;
       let post2val = boxes[pattern[2]].innerText;

       if(post0val != "" && post1val != "" && post2val!= "")
       {
        if(post0val === post1val && post1val === post2val)
        {
            winner = true;
            showWinner(post0val);
         
        }
        else if(count === 9 && winner == false)
        {
            showWinner("draw");
        }
       }
       

       
       
      
    }
}







//let body=document.querySelector('body');

let game=["rock","paper","scissors"];
let btn=document.querySelectorAll(".choices");
let btn1=document.getElementById("user-choice");
let you=document.querySelector("#you");
let your_score=0;
let computer =document.querySelector("#computer");
let computer_score=0;

btn.forEach(button=>{
    button.addEventListener("click",()=>{

        let randomChoice=game[Math.floor(Math.random()*game.length)];

        console.log(randomChoice);

        console.log("You:", button.value)

        if(button.value===randomChoice){
            btn1.innerText="Its a tie";
        }
        else if(
                (button.value === "rock" && randomChoice === "scissors") ||
                (button.value === "paper" && randomChoice === "rock") ||
                (button.value === "scissors" && randomChoice === "paper")
            ){
                btn1.innerText="you win";
                your_score++;
                you.innerText=`you:  ${your_score}`;
            }
        else{
                btn1.innerText="You lose";
                computer_score++;
                computer.innerText=`computer ${computer_score}`;
            }
        }
    )

}
);

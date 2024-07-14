let user=0
let comp=0
const  resetBtn = document.querySelector(".btn");

const userscore=document.querySelector(`#user-score`)
const compscore=document.querySelector(`#comp-score`)

const choices=document.querySelectorAll(`.choice`)
const msg=document.querySelector(`button`)

const gencompchoice=()=>{
    const opt=["rock","paper","scissors"]
    let compchoice=Math.floor(Math.random()*3)
    return opt[compchoice]
}
const draw=()=>{
    msg.innerText = "Game was Draw.";
    msg.style.backgroundColor="white"
    msg.style.color="black"
}

const showWinner=(userwin)=>{
    if(userwin ){
        user++
        msg.innerText="You Win against computer"
        userscore.innerText= user
        msg.style.backgroundColor="green"
    }
    else {
        comp++
        msg.innerText="You Lose against computer"
        compscore.innerText= comp
        msg.style.backgroundColor="red"
    }
}

const playgame=(userchoice)=>{
    console.log(userchoice,"was clicked")
    const compchoice=gencompchoice()
    console.log(compchoice,"was generated")
    let userwin=true
    if(userchoice==compchoice){
        draw()
        return
}
    
    else if((userchoice=="rock" && compchoice=="scissors")|| (userchoice=="paper" && compchoice=="rock")||(userchoice=="scissors" && compchoice=="paper")){
        console.log("you win against comp")
        userwin=true
    }
    else if((compchoice=="rock" && userchoice=="scissors")|| (compchoice=="paper" && userchoice=="rock")||(compchoice=="scissors" && userchoice=="paper")){
        
        console.log("computer wins against you")
        userwin=false
    }
    showWinner(userwin)

}

choices.forEach((choice)=>{
    choice.addEventListener(`click`,()=>{
        const userchoice=choice.getAttribute("id")
        playgame(userchoice)
    })
}
)

const resetGame = () => {
    user = 0;
    comp = 0;
    userscore.innerText = user;
    compscore.innerText = comp;
    msg.innerText = "Play";
    msg.style.backgroundColor = "orange";
}
resetBtn.addEventListener("click", resetGame);
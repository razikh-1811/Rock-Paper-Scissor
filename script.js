let inputs=document.querySelector(".images");
let paper=document.querySelector(".image1");
let rock=document.querySelector(".image2");
let scissors=document.querySelector(".image3");
let change=document.querySelector("#last1");
let yourscore=document.querySelector("#yscore");
let compscore=document.querySelector("#cscore");

let usersinput="roxk";
let ys=0;
let cs=0;
let rocks=rock.addEventListener("click",()=>
{
      
      usersinput="rock";
      Final();
});
let papers=paper.addEventListener("click",()=>
{
    usersinput="paper";
    Final();
 });
let scissor=scissors.addEventListener("click",()=>
{
    
    usersinput="scissors";
    Final();
   

});

let computers_choice=()=>
{
    const arr=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return arr[idx];

}
let Final=()=>
{
    const computers_choices=computers_choice();
    console.log(usersinput);

if(usersinput===computers_choices)
{
    console.log("DRAW");
    change.innerText="DRAW,YOUR BOTH CHOICES ARE SAME";
    change.style.backgroundColor="yellow";

}
else if(usersinput==="scissors")
{
    if(computers_choices==="rock")
    {
        console.log("computer  wins //rock");
        change.innerText="YOU LOSE ,COMPUTER'S CHOICE IS ROCK";
        cs++;
        compscore.innerText=cs;
        change.style.backgroundColor="red";

    }
    else if(computers_choices==="paper")
    {
        console.log("you wins //paper");
        change.innerText="YOU WIN ,COMPUTER'S CHOICE IS PAPER";
        ys++;
        yourscore.innerText=ys;
        change.style.backgroundColor="green";
    }

}
else if(usersinput==="rock")
{
    if(computers_choices==="scissors")
    {
         console.log("users wins //scissors");
         change.innerText="YOU WIN,COMPUTER'S CHOICE IS SCISSORS";
         ys++;
         yourscore.innerText=ys;
         change.style.backgroundColor="green";
    
    }
    else if(computers_choices==="paper")
    {
         console.log("computer wins //paper");
         change.innerText="YOU LOSE,COMPUTER'S CHOICE IS PAPER";
         cs++;
         compscore.innerText=cs;
         change.style.backgroundColor="red";
    }
    
 }
else if(usersinput==="paper")
{
    if(computers_choices==="rock")
    {
        console.log("users  wins //rock");
        change.innerText="YOU WIN,COMPUTER'S CHOICE IS ROCK";
        ys++;
        yourscore.innerText=ys;
        change.style.backgroundColor="green";
        
    }
    else if(computers_choices==="scissors")
    {
                console.log("computer wins //scissors");
                change.innerText="YOU LOSE,COMPUTER'S CHOICE IS SCISSORS";
                cs++;
                compscore.innerText=cs;
                change.style.backgroundColor="red";
    }
        
}
            


}

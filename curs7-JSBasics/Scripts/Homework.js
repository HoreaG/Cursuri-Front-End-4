
function game(){
  
var user_choice = Math.random();
       if (user_choice < 0.34) {
            user_choice = "Rock";
        } else if(user_choice <= 0.67) {
            user_choice = "Paper";
        } else {
            user_choice = "Scissors";
        }
console.log("User:"+" "+user_choice)
var comp_choice = Math.random();
        if (comp_choice < 0.34) {
            comp_choice = "Rock";
        } else if(comp_choice <= 0.67) {
            comp_choice = "Paper";
        } else {
            comp_choice = "Scissors";
        }
 console.log("Comp:"+" "+comp_choice)
           if (user_choice === comp_choice){
            console.log("Result:"+" "+"Tie");
         } else if(user_choice === "Rock" && comp_choice==="Scissors"){
            console.log("Result:"+" "+"User");
         }
           else if(user_choice === "Paper" && comp_choice==="Scissors"){
            console.log("Result:"+" "+"Comp");
         }
            else if(user_choice === "Scissors" && comp_choice==="Rock"){
            console.log("Result:"+" "+"Comp");
         }
            else if(user_choice === "Paper" && comp_choice==="Rock"){
            console.log("Result:"+" "+"User");
         }
            else if(user_choice === "Scissors" && comp_choice==="Paper"){
            console.log("Result:"+" "+"User");
    }
            else if(user_choice === "Rock" && comp_choice==="Paper"){
            console.log("Result:"+" "+"Comp");
    }
 
}
      game()
        
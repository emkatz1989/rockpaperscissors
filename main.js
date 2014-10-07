var imperio = document.getElementById("imperio")
	imperio.addEventListener("click",function(){
		var userChoice="imperio"
		var computerChoice= Math.random();
		if(computerChoice < 0.34){
		computerChoice = "imperio";
		}
		else if(computerChoice <= 0.67){
		computerChoice = "crucio";
		}
		else{
		computerChoice="stupefy";
		}
console.log(userChoice+"!");
console.log(computerChoice+"!");

var compare = function(choice1,choice2){
	if(choice1 === choice2){
		alert("Your spells have collided! Sparks and bolts are shooting everywhere...EPIC!");
	}
	else if(choice1 === "imperio"){
		if(choice2 === "stupefy"){
			alert("Your opponent is your submissive slave. Imperio wins!");
		}
		else{
			alert("You are screaming in pain as the feeling of white hot knives overtakes you. Obviously, you lose.");
		}
	}
	else if(choice1 === "crucio"){
		if(choice2 === "imperio"){
			alert("Your opponent is being crucified by crucio. You watch victoriously.");
		}
		else{
			alert("You've been struck dumb by Stupefy! Hope someone's there to catch you as you fall back in rigor mortus.");
		}

	}
	else if(choice1==="stupefy"){
		if(choice2==="imperio"){
			alert("You are now a puppet. Dance, puppet, Dance. Need I say you lose?");
		}
		else{
			alert("Your opponent is now stupid. Congrats, you win.");
		}
	}
}
compare(userChoice,computerChoice)
  });

var crucio= document.getElementById("crucio")
	crucio.addEventListener("click",function(){

	var userChoice="crucio"
	var computerChoice=Math.random();
		if(computerChoice<0.34){
			computerChoice==="imperio";
		}
		else if(computerChoice <= 0.67) {
          computerChoice === "crucio";
        } 
        else {
        computerChoice === "stupefy";
        } 
        console.log(userChoice+"!");
        console.log(computerChoice+"!");

     var compare=function(choice1,choice2){
     	if(choice1===choice2){
     		alert("Your spells have collided! Sparks and bolts are shooting everywhere...EPIC!");
     	}
     	else if(choice1 === "imperio"){
     		if(choice2 === "stupefy"){
     			alert("Your opponent is your submissive slave. Imperio wins!");

     		}
     	else{
     		alert("You are screaming in pain as the feeling of white hot knives overtakes you. Obviously, you lose.");
     		}
     	}
     	else if(choice1==="crucio"){
     		if(choice2 === "imperio"){
     			alert("Your opponent is being crucified by crucio. You watch victoriously.");
     		}
     	else{
     		alert("You've been struck dumb by Stupefy! Hope someone's there to catch you as you fall back in rigor mortus.");
     		}
     	}
     	else if(choice1 === "stupefy"){
     		if(choice2 ==="imperio"){
     			alert("You are now a puppet. Dance, puppet, Dance. Need I say you lose?");
     			}
     		else{
     			alert("Your opponent is now stupid. Congrats, you win.");
     			}
     	}
     }
     compare(userChoice,computerChoice)
	});
var stupefy= document.getElementById("stupefy")
	scissors.addEventListener("click", function(){
		var userChoice="stupefy"
		varComputerChoice = Math.random();
		if(computerChoice<0.34){
			computerChoice="imperio";
		}
		else if(computerChoice <= 0.67) {
          computerChoice = "crucio";
        } 
        else {
        computerChoice = "stupefy";
        } 
        console.log(userChoice+"!");
        console.log(computerChoice+"!");

        var compare = function(choice1,choice2){
        	if(choice1 === choice2){
				alert("Your spells have collided! Sparks and bolts are shooting everywhere...EPIC!");
			}
			else if(choice1 === "imperio"){
				if(choice2 === "stupefy"){
					alert("Your opponent is your submissive slave. Imperio wins!");
					}
				else{
					alert("You are screaming in pain as the feeling of white hot knives overtakes you. Obviously, you lose.");
				}
			}
			else if(choice1 ==="crucio"){
				if(choice2 === "rock"){
					alert("Your opponent is being crucified by crucio. You watch victoriously.");
					}
				else{
					alert("You've been struck dumb by Stupefy! Hope someone's there to catch you as you fall back in rigor mortus.");
				}
			}
				else if(choice1 ==="stupefy"){
					if(choice2 === "rock"){
						alert("You are now a puppet. Dance, puppet, Dance. Need I say you lose?");
						}
				else{
					alert("Your opponent is now stupid. Congrats, you win.");
					}
				}
				compare(userChoice,computerChoice)
        };

























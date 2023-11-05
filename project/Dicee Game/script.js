
function rollDice(){
    let randomNumber = Math.floor(Math.random()*6)+1;
    let imageSource = `images/dice${randomNumber}.png`;

    let dice = document.querySelector(".dice1").setAttribute("src", imageSource);

    let randomNumber2 = Math.floor(Math.random()*6)+1;

let imageSource2= `images/dice${randomNumber2}.png`;

let dice2 = document.querySelector(".dice2").setAttribute("src", imageSource2);


let logo = document.getElementById("logo");
logo.hidden = true;
logo = logo.innerHTML;

let Extracontent = document.querySelector(".heading")
Extracontent.style.fontSize = "5.6rem";

if(randomNumber > randomNumber2){
    
    Extracontent.innerHTML = logo + " Player 1 Win! " ;
    
}
else if(randomNumber < randomNumber2){

    Extracontent.textContent = "Player 2 win! " + logo
}
else {
    
    
    Extracontent.textContent = logo + " Hooray, Both are Winners! " + logo;

}
}

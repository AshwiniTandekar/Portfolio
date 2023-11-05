

// Array.from(drum.forEach(element => {
//     let wFunction = function(){
//         alert("I got clicked")
//     }
//     element.addEventListener("click", wFunction)
// }));

// drum[0].addEventListener("click", function(){
//     let x = drum[0].innerHTML
//     if(x == 'w'){
//         const w = new Audio("sounds/tom-1.mp3") ;
//         w.play();
//     }
// })

// button sound
let drum = document.querySelectorAll(".drum");

let i = 0;
let size = drum.length;
while(i<(size)){
    drum[i].addEventListener("click", function(){
        let drumElement = this.innerHTML;
        makeSound(drumElement);
    })
    i++;
}


// keypress sound
document.addEventListener("keypress",function(event){
    makeSound(event.key)
})

function makeSound(key){
    switch(key){
        case 'w' :
            const audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
        break;
        case 'a' :
            const audio2 = new Audio("sounds/tom-3.mp3");
            audio2.play();
        break;
        case 's' :
            const audio3 = new Audio("sounds/kick-bass.mp3");
            audio3.play();
        break;
        case 'd' :
            const audio4 = new Audio("sounds/tom-2.mp3");
            audio4.play();
        break;
        case 'j' :
            const audio5 = new Audio("sounds/crash.mp3");
            audio5.play();
        break;
        case 'k' :
            const audio6 = new Audio("sounds/snare.mp3");
            audio6.play();
        break;
        case 'l' :
            const audio7 = new Audio("sounds/tom-4.mp3");
            audio7.play();
        break;
    }
}
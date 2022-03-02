document.getElementById("mouseEvent").addEventListener("mouseenter", mouseEnter);
document.getElementById("mouseEvent").addEventListener("mouseleave", mouseleave);

function mouseEnter (){
    document.getElementById("mouseEvent").style.borderTop = "4px solid indianred";
}

function mouseleave (){
    document.getElementById("mouseEvent").style.borderTop= "4px solid rgba(35, 166, 202, 0.651)";
} 
    

// const mouseEnter = document.querySelectorAll('#mouseEvent');

// mouseEnter.forEach(element => {
//     element.style.border = "3px solid gray";
// })

// const mouseLeave = document.querySelectorAll('#mouseEvent');

// mouseLeave.forEach(element => {
//     element.style.border = "1px solid rgba(141, 148, 150, 0.651)";
// })


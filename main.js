
function load() {
    const test = document.querySelectorAll(".card");
    console.log(test);
    test.forEach( e => {
        e.addEventListener("mouseenter", entrar);
        e.addEventListener("mouseleave", sair)
    });
}

function entrar (){
    const el = event.target || event.srcElement;
    const id = el.id;
    document.getElementById(id).style.borderTop = "4px solid indianred";
}

function sair(){
    const el = event.target || event.srcElement;
    const id = el.id;
    document.getElementById(id).style.borderTop = "4px solid rgba(35, 166, 202, 0.651)";
}
document.addEventListener("DOMContentLoaded", load, false);


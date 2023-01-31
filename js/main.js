let menu = document.getElementById("menu");
let buttonMenu = document.getElementById("menuBtn")

function onClickevent() {
    menu.classList.toggle("open")
}

if (menu != null && buttonMenu != null) {
    buttonMenu.addEventListener('click',onClickevent)
}


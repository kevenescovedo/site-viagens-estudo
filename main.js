let header = document.querySelector("header");
let menu = document.querySelector(".menu");
let menu_mobile = document.querySelector(".mobile-menu");


function changeRandomImage() {
    const numeroAleatorio = Math.floor(Math.random() * 4) + 1;
    header.style.backgroundImage =`url('./images/${numeroAleatorio}.jpg')`;

}

changeRandomImage();
setInterval(() => {
    changeRandomImage();
}, 4000);
menu.addEventListener("click", function () {
menu_mobile.classList.toggle("show-menu");
});
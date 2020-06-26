console.log("Cześć wszystkim!");



let main__image = document.querySelector(".main__image");
let main__button = document.querySelector(".main__button");


main__button.addEventListener("click", () => {
    if (main__button.innerText === "zmień obrazek") {
        main__image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Kotka_Brytyjska.jpg/220px-Kotka_Brytyjska.jpg";
        main__button.innerText = "wróć";
    } else {
        main__image.src = "https://upload.wikimedia.org/wikipedia/commons/5/53/Sheba1.JPG";
        main__button.innerText = "zmień obrazek";
    }
});



let newColor = document.querySelector("body");
let nav__button = document.querySelector('.nav__button')

nav__button.addEventListener("click", () => {
    if (nav__button.innerText === "zmień tło") {
        nav__button.innerText = "przywróć tło";
        newColor.classList.add("newColor");
    } else {
        nav__button.innerText = "zmień tło";
        newColor.classList.remove("newColor");
    }
});
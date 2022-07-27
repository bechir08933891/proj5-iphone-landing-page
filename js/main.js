// brign the big image by its class
let img = document.querySelector(".img");
// bring the conatiner by its class
let container = document.querySelector(".container");


// function that change the phone image
function phones(phone){
    // change the source of image
    img.src = phone;
}

// change the background of container
function colors(color){
    container.style.background = color;
}
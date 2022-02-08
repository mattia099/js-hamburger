let hamburger = document.getElementById("hamburger");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let close = document.querySelector(".close"); 

console.log(hamburgerMenu);
console.log(hamburger)
console.dir(hamburgerMenu);

hamburger.addEventListener( 'click' , function(){
    hamburgerMenu.style.display = "block";
    console.log(hamburger , hamburgerMenu);
})

close.addEventListener( 'click' , function(){
    hamburgerMenu.style.display = "none";
})

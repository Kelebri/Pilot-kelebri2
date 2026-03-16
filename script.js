let images = document.querySelectorAll(".gallery img");

images.forEach(img => {
img.addEventListener("click", function(){
alert("Umebonyeza picha!");
});
});

function openImage(img){
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

lightbox.style.display = "flex";
lightboxImg.src = img.src;
}

function closeImage(){
document.getElementById("lightbox").style.display = "none";
}

let slideIndex = 0;

showSlides();

function showSlides(){
let slides = document.getElementsByClassName("slides");

for(let i = 0; i < slides.length; i++){
slides[i].style.display = "none";
}

slideIndex++;

if(slideIndex > slides.length){
slideIndex = 1;
}

slides[slideIndex-1].style.display = "block";

setTimeout(showSlides, 3000);
}
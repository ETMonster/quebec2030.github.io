setInterval(changeImage, 7500);
window.onscroll = function() {headerStick()};

const homeSlideshowImg = [
    "img/chateau_frontenac_0.jpg",
    "img/downtown.jpg",
    "img/old_city.jpg",
    "img/chateau_frontenac_1.jpg",
    "img/plains_abraham.jpg",
];
const homeSlideshowImgCaption = [
    "The Chateau de Frontenac on the Plains of Abraham. The Chateau de Frontenac, or \"Frontenac Castle\", named after Louis de Buade, Count of Frontenac.",
    "1",
    "2",
    "3",
    "4",
];

const homeImg = document.getElementById("home-img");
const homeImgText = document.getElementById("home-img-text");

var header = document.getElementById("header");
var sticky = header.offsetTop;
var slideshowCurrentImgIndex = 1;

function changeImage() {
    homeImg.src = homeSlideshowImg[slideshowCurrentImgIndex];
    homeImgText.innerHTML = homeSlideshowImgCaption[slideshowCurrentImgIndex];
    
    if (slideshowCurrentImgIndex == homeSlideshowImg.length - 1) {
        slideshowCurrentImgIndex = 0;
        return;
    }
    slideshowCurrentImgIndex++;
}

function headerStick() {
    if (window.pageYOffset > sticky) {
        header.style.position = "fixed";
    }
    else {
        header.style.position = "none";
    }
}
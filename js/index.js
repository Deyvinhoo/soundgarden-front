// BANNER ROTATIVO

let time = 3500
let currentImageIndex = 0
let images = document.querySelectorAll("#slider img")
let max = images.length;
    
function nextImage() {
    
    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++    
    
    if(currentImageIndex >= max) currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")    
}

function start() {
    setInterval(() => {
        nextImage()}, time)
}

window.addEventListener("load", start)

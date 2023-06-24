// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
var imageno = 1;
displayimg(imageno);

function nextimg(n) {
    displayimg(imageno += n)
}

function currentSlide(n) {
    displayimg(imageno = n)
}

function displayimg(n) {
    var i;
    var image = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");

    if (n > image.length) {
        imageno = 1;
    }

    if (n < 1) {
        imageno = image.length;
    }

    for (i = 0;i < image.length;i++) {
        image[i].style.display = "none";
    }

    for (i = 0;i < dots.length;i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    image[imageno - 1].style.display = "block";
    dots[imageno - 1].className += " active"
}
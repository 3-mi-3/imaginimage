function MyNav(z){
    var x = document.getElementById('NavContent')
    
    
    if (x.style.display === "none") {
        x.style.display = "block";
        
        z.innerHTML='-';
       
      } else {
        x.style.display = "none";
        z.innerHTML="+";
      }
}

let slideIndex = 0;
currentSlide(slideIndex);
function currentSlide(n) {

  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n].style.display = "block";
  dots[n].className += " active";
  slideIndex=n;
}

showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex >= slides.length) {slideIndex = 0}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";  
  dots[slideIndex].className += " active";
  setTimeout(showSlides, 7000); 
}

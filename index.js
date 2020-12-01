mybutton = document.getElementById("myBtn");
/*Slide Carousel*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}    
 
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 9000); 
}

//SideBar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("barContent").style.marginLeft = "250px";
window.addEventListener('click', function(e){  
 if (document.getElementById('theBar').contains(e.target)){
   // Clicked in box
 } else{
   // Clicked outside the box
   closeNav();
 }
});

}
function closeNav() {
   document.getElementById("mySidebar").style.width = "0";
   document.getElementById("barContent").style.marginLeft = "0";

}

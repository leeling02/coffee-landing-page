var slideIndex = 0; 
slideshow (); 

function slideshow() {
    var i = 0;
    var x = document.getElementsByClassName("slideshow-img")
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
    slideIndex ++; 
    if (slideIndex > x.length) {slideIndex = 1}    
  x[slideIndex-1].style.display = "block";  
  setTimeout(slideshow, 2000); // Change image every 2 seconds

}
console.log("Hello World")
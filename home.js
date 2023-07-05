// const navList = document.querySelector('.navbar-list');
// const navToggle = document.querySelector('.mobile-nav-toggle');

// navToggle.addEventListener('click',() => {
//     const visibility = navList.getAttribute('data-visible')
//     const img = document.querySelector('.pt2-img');
//     const text = document.querySelector('.slider');
//     const aboutText = document.querySelector('.pt2-text')
//     // text.style.zIndex=-1
//     img.style.zIndex = -1;
//     // aboutText.style.zIndex = -1;
//     if (visibility === "false"){
//         navList.setAttribute('data-visible',true);
//         navToggle.setAttribute('aria-expanded', true);
//     }
//     else if(visibility === "true"){
//         navList.setAttribute('data-visible',false);
//         navToggle.setAttribute('aria-expanded', false);
//         img.style.zIndex=1;
//         // text.style.zIndex=1
//         // aboutText.style.zIndex = 1;
//     }
// });

// let maxWidth = screen.width;
// document.addEventListener('DOMContentLoaded', function() {
//     var slides = document.querySelectorAll('.slide');
//     var dots = document.querySelectorAll('.dot');
//     const heroSection = document.querySelector('.hero-section');
//     var currentSlide = 0;
    
//   // console.log(maxWidth)
//     function showSlide(n) {
//       for (var i = 0; i < slides.length; i++) {
//         slides[i].classList.remove('active');
//         dots[i].classList.remove('active');
      
//       }
      
//       slides[n].classList.add('active');
//       dots[n].classList.add('active');
      
//     }
  
//     function nextSlide() {
//       currentSlide = (currentSlide + 1) % slides.length;
//       showSlide(currentSlide);
//       // console.log(currentSlide)
      
//       if (maxWidth > 480){
//       heroSection.style.backgroundImage = `url('images/background${currentSlide+1}.png')`;
//       }
//     }
  
//     setInterval(nextSlide, 3000); // Change slide every 3 seconds
//   });



  
//   window.addEventListener('scroll', function() {
//     var header = document.querySelector('.header');
  
//     if (window.scrollY > 0) {
//       header.classList.add('scrolled');
//     } else {
//       header.classList.remove('scrolled');
//     }
//   });
//   var scrollToTopButton = document.getElementById("scrollToTopButton");

//   scrollToTopButton.addEventListener("click", function() {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   });
  
//   window.addEventListener("scroll", function() {
//     if (window.scrollY > 300) {
//       scrollToTopButton.classList.add("show");
//     } else {
//       scrollToTopButton.classList.remove("show");
//     }
//   });
  
//   // var images = [
//   //   'images/background1.png',
//   //   'images/background2.png',
//   //   'images/background3.png'
//   // ];
  
//   // var currentIndex = 0;
//   // var backgroundElement = document.getElementById('hero-section');
  
//   // function changeBackgroundImage() {
//   //   backgroundElement.style.backgroundImage = 'url(' + images[currentIndex] + ')';
//   //   currentIndex = (currentIndex + 1) % images.length; // Loop through the images
//   // }
  
//   // setInterval(changeBackgroundImage, 3000); // Change image every 3 seconds
  

//Modify version
const navList = document.querySelector('.navbar-list');
const navToggle = document.querySelector('.mobile-nav-toggle');

const img = document.querySelector('.pt2-img');
// const text = document.querySelector('.slider');
// const aboutText = document.querySelector('.pt2-text');

navToggle.addEventListener('click', () => {
  const visibility = navList.getAttribute('data-visible');
  
  img.style.zIndex = visibility === "true" ? -1 : 1;
  // text.style.zIndex = visibility === "true" ? -1 : 1;
  // aboutText.style.zIndex = visibility === "true" ? -1 : 1;
  
  navList.setAttribute('data-visible', !visibility);
  navToggle.setAttribute('aria-expanded', !visibility);
});

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const heroSection = document.querySelector('.hero-section');
let currentSlide = 0;

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    dots[i].classList.remove('active');
  }
  
  slides[n].classList.add('active');
  dots[n].classList.add('active');
  
  if (maxWidth > 480) {
    heroSection.style.backgroundImage = `url('images/background${n+1}.png')`;
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const scrollToTopButton = document.getElementById("scrollToTopButton");

scrollToTopButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", function() {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

// const navList = document.querySelector('.navbar-list');
// const navToggle = document.querySelector('.mobile-nav-toggle');

// navToggle.addEventListener('click',() => {
//     const visibility = navList.getAttribute('data-visible')
//     // text.style.zIndex=-1
//     // aboutText.style.zIndex = -1;
//     if (visibility === "false"){
//         navList.setAttribute('data-visible',true);
//         navToggle.setAttribute('aria-expanded', true);
//     }
//     else if(visibility === "true"){
//         navList.setAttribute('data-visible',false);
//         navToggle.setAttribute('aria-expanded', false);
//         // text.style.zIndex=1
//         // aboutText.style.zIndex = 1;
//     }
// });
// window.addEventListener('scroll', function() {
//     var header = document.querySelector('.header');
  
//     if (window.scrollY > 0) {
//       header.classList.add('scrolled');
//     } else {
//       header.classList.remove('scrolled');
//     }
//   });
//   var scrollToTopButton = document.getElementById("scrollToTopButton");
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
  
//   const backButton = document.getElementById('backButton');

//   backButton.addEventListener('click', () => {
//     window.history.back();
//   });
  
//   const images = document.querySelectorAll('.pricing-style-image img');

//   images.forEach(image => {
//       image.addEventListener('click', () => {
//           images.forEach(img => img.classList.remove('selected'));
//           image.classList.add('selected');
//       });
//   });

//modify version
const navList = document.querySelector('.navbar-list');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = navList.getAttribute('data-visible');

  if (visibility === 'false') {
    navList.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === 'true') {
    navList.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 0);
});

const scrollToTopButton = document.getElementById('scrollToTopButton');

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  scrollToTopButton.classList.toggle('show', window.scrollY > 300);
});

const backButton = document.getElementById('backButton');

backButton.addEventListener('click', () => {
  window.history.back();
});

const images = document.querySelectorAll('.pricing-style-image img');

images.forEach(image => {
  image.addEventListener('click', () => {
    images.forEach(img => img.classList.remove('selected'));
    image.classList.add('selected');
  });
});

  
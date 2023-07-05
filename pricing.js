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

//   const images2 = document.querySelectorAll('.pricing-type-image img');

//   images2.forEach(image => {
//       image.addEventListener('click', () => {
//           images2.forEach(img => img.classList.remove('selected'));
//           image.classList.add('selected');
//       });
//   });


//   const images3 = document.querySelectorAll('.pricing-time-image img');
//   images3.forEach(image => {
//     image.addEventListener('click', () => {
//         images3.forEach(img => img.classList.remove('selected'));
//         image.classList.add('selected');
//     });
// });

//Modify version:
const navList = document.querySelector('.navbar-list');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = navList.getAttribute('data-visible');
  const isVisible = visibility === 'true';

  navList.setAttribute('data-visible', !isVisible);
  navToggle.setAttribute('aria-expanded', !isVisible);
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 0);
});

const backButton = document.getElementById('backButton');

backButton.addEventListener('click', () => {
  window.history.back();
});

function handleImageClick(images) {
  images.forEach(image => {
    image.addEventListener('click', () => {
      images.forEach(img => img.classList.remove('selected'));
      image.classList.add('selected');
    });
  });
}

const pricingStyleImages = document.querySelectorAll('.pricing-style-image img');
const pricingTypeImages = document.querySelectorAll('.pricing-type-image img');
const pricingTimeImages = document.querySelectorAll('.pricing-time-image img');

handleImageClick(pricingStyleImages);
handleImageClick(pricingTypeImages);
handleImageClick(pricingTimeImages);

  
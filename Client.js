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
// // let backButton = document.querySelector('#backButton');
// //     backButton.addEventListener('click', () =>{
// //     window.history.back();
// //   });

// document.getElementById('backbutton').addEventListener('click', goBack);

// function goBack() {
//   window.history.back();
// }

//modify version
const navList = document.querySelector('.navbar-list');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = navList.getAttribute('data-visible');

  if (visibility === 'false') {
    navList.setAttribute('data-visible', 'true');
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === 'true') {
    navList.setAttribute('data-visible', 'false');
    navToggle.setAttribute('aria-expanded', false);
  }
});

document.getElementById('backbutton').addEventListener('click', () => {
  window.history.back();
});

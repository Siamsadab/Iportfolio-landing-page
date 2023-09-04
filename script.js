const dynamicText = document.querySelector("h1 span");
const words = ["Web Developer", "Graphic Designer", "Video Editor", "Cms Expert"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();


// testimonian srtart

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 500,
      
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // for mobile
  var swiper = new Swiper(".smySwiper", {
    slidesPerView: 1,
      spaceBetween: 50,
      centeredSlides: true,
      
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
// slidertwo
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     disableOnInteraction: false,
//   },
// });
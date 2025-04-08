// Select the header
const header = document.querySelector('header');

// Listen for scroll events
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Add background color when scrolling
  if (scrollPosition > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});



const scrollArrow = document.getElementById("scrollArrow");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        scrollArrow.classList.add("hidden");
    } else {
        scrollArrow.classList.remove("hidden");
    }
});

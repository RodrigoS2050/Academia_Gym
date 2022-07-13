// Blur Effect In Header
const header = document.querySelector(".header");
function blur() {
  if (document.documentElement.scrollTop > 50) {
    header.classList.add("active-blur");
  } else {
    header.classList.remove("active-blur");
  }
}
window.addEventListener("scroll", blur);

// Animation In Sections
const sections = document.querySelectorAll(".js-scroll");
const calcWindow = window.innerHeight * 0.6;
function scrollAnimation() {
  sections.forEach((item) => {
    const sectionTop = item.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - calcWindow;
    if (isSectionVisible < 0) {
      item.classList.add("active");
    }
  });
}
scrollAnimation();
window.addEventListener("scroll", scrollAnimation);

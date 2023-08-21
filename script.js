function smoothScroll(target) {
  const element = document.getElementById(target);
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

const navigationLinks = document.querySelectorAll("#navbar a[data-scroll]");
navigationLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute("data-scroll");
    smoothScroll(target);
  });
});

const icons = document.querySelectorAll(".icon");
const iconimg = document.querySelector(".icon.cancel");
const hamburgerimg = document.querySelector(".icon.hamburger");
const menu = document.querySelector("nav");

icons.forEach(item => {
  item.addEventListener("click", e => {
    if (e.target.classList.contains("hamburger")) {
      menu.classList.remove("hide");
      menu.classList.add("show");
      iconimg.classList.remove("hide");
      iconimg.classList.add("show");
      hamburgerimg.classList.remove("show");
      hamburgerimg.classList.add("hide");
    } else {
      menu.classList.remove("show");
      menu.classList.add("hide");
      iconimg.classList.remove("show");
      iconimg.classList.add("hide");
      hamburgerimg.classList.remove("hide");
      hamburgerimg.classList.add("show");
    }
  });
});

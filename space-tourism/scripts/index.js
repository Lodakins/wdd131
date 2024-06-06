const toggleBtn = document.querySelector("#toggle-btn");
const iconimg = document.querySelector("#icon");
const menu = document.querySelector("nav.menus");

toggleBtn.addEventListener("click", e => {
  if (e.target.classList.contains("open")) {
    menu.style.display = "none";
    e.target.classList.remove("open");
    iconimg.src = "/images/shared/icon-hamburger.svg";
  } else {
    menu.style.display = "grid";
    // menu.classList.add("show");
    iconimg.src = "/images/shared/icon-close.svg";
    e.target.classList.add("open");
  }
});

const body = document.querySelector(".main-body");
const spaceImg = document.querySelector('.space-image');

body.addEventListener("click", e => {

  const tabname = document.querySelectorAll(".tab-name");
  const tabs = document.querySelectorAll(".tab-1");

  if (e.target.classList.contains("tab-name")) {
      tabname.forEach(el => {
        el.classList.remove("active");
      });

      e.target.classList.add("active");
      const dataAttr = e.target.getAttribute("data-attr");
      const imgAttr = e.target.getAttribute("data-img");
      spaceImg.src = `/images/destination/${imgAttr}`;

      tabs.forEach(el => {
        el.classList.remove("active");
        if (el.classList.contains(dataAttr)) {
          el.classList.add("active");
        }
      });
  }
});

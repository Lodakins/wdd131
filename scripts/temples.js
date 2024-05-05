const icons = document.querySelectorAll(".icon");
const iconimg = document.querySelector(".icon.cancel");
const hamburgerimg = document.querySelector(".icon.hamburger");
const menu = document.querySelector("nav");


icons.forEach((item)=>{
    item.addEventListener("click", e => {
        if (e.target.classList.contains("hamburger")) {
          menu.classList.remove("hide");
          menu.classList.add("show");
          iconimg.style.display = "block";
          hamburgerimg.style.display = "none";
        } else {
          menu.classList.remove("show");
          menu.classList.add("hide");
          iconimg.style.display = "none";
          hamburgerimg.style.display = "block";
        }
      });
})
   


const icons = document.querySelectorAll(".icon");
const iconimg = document.querySelector(".icon.cancel");
const hamburgerimg = document.querySelector(".icon.hamburger");
const menu = document.querySelector("nav");

const oldMenu = document.querySelector("#old");
const newMenu = document.querySelector("#new");
const largeMenu = document.querySelector("#large");
const smallMenu = document.querySelector("#small");


const cardContainer = document.querySelector("#card-container");

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


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName:"Boston Massachusetts",
    location:"Boston Massachusetts",
    dedicated:"1997, June, 13",
    area:69600,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boston-massachusetts/400x250/boston-temple-lds-945541-wallpaper.jpg"
  },
  {
    templeName:"Brisbane Australia",
    location:"Brisbane Australia",
    dedicated:"2001, May, 26",
    area:10700,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brisbane-australia/400x250/brisbane-australia-temple-lds-745088-wallpaper.jpg"
  },
  {
    templeName:"Cardston Alberta",
    location:"Cardston Alberta",
    dedicated:"1913, November, 9",
    area:  81700,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cardston-alberta/400x250/cardston-alberta-temple-lds-680533-wallpaper.jpg"
  }
];

let innerChild = "";
temples.forEach((el)=>{
  innerChild+=`
  <div class="temple-card-container">
  <div class="temple-info">
      <h3 class="temple-name">${el.templeName}</h3>
      <p><span>LOCATION:</span>${el.location}</p>
      <p><span>DEDICATED:</span> ${el.dedicated}</p>
      <p><span>SIZE:</span> ${el.area}ft<sup>2</sup></p>
  </div>
  <div class="temple-image">
      <img src="${el.imageUrl}" alt="${el.templeName}"
      class="temple-img" loading="lazy">
  </div>
</div>
  `;

});

cardContainer.innerHTML=innerChild;

oldMenu.addEventListener('click',(el)=>{

  innerChild = ""
  temples.forEach((el)=>{
    let year = el.dedicated.split(",")[0].trim();
    if(year<1900){
      innerChild+=`
  <div class="temple-card-container">
  <div class="temple-info">
      <h3 class="temple-name">${el.templeName}</h3>
      <p><span>LOCATION:</span>${el.location}</p>
      <p><span>DEDICATED:</span> ${el.dedicated}</p>
      <p><span>SIZE:</span> ${el.area}ft<sup>2</sup></p>
  </div>
  <div class="temple-image">
      <img src="${el.imageUrl}" alt="${el.templeName}"
      class="temple-img" loading="lazy">
  </div>
</div>
  `;
    }
  });

  cardContainer.innerHTML=innerChild;
  
});


newMenu.addEventListener('click',(el)=>{

  innerChild = ""
  temples.forEach((el)=>{
    let year = el.dedicated.split(",")[0].trim();
    if(year>2000){
      innerChild+=`
  <div class="temple-card-container">
  <div class="temple-info">
      <h3 class="temple-name">${el.templeName}</h3>
      <p><span>LOCATION:</span>${el.location}</p>
      <p><span>DEDICATED:</span> ${el.dedicated}</p>
      <p><span>SIZE:</span> ${el.area}ft<sup>2</sup></p>
  </div>
  <div class="temple-image">
      <img src="${el.imageUrl}" alt="${el.templeName}"
      class="temple-img" loading="lazy">
  </div>
</div>
  `;
    }
  });

  cardContainer.innerHTML=innerChild;
  
});

largeMenu.addEventListener('click',(el)=>{
  innerChild = ""
  temples.forEach((el)=>{
   
    if(el.area > 90000){
      innerChild+=`
  <div class="temple-card-container">
  <div class="temple-info">
      <h3 class="temple-name">${el.templeName}</h3>
      <p><span>LOCATION:</span>${el.location}</p>
      <p><span>DEDICATED:</span> ${el.dedicated}</p>
      <p><span>SIZE:</span> ${el.area}ft<sup>2</sup></p>
  </div>
  <div class="temple-image">
      <img src="${el.imageUrl}" alt="${el.templeName}"
      class="temple-img" loading="lazy">
  </div>
</div>
  `;
    }
  });

  cardContainer.innerHTML=innerChild;
  
});


smallMenu.addEventListener('click',(el)=>{
  innerChild = ""
  temples.forEach((el)=>{
   
    if(el.area < 10000 ){
      innerChild+=`
  <div class="temple-card-container">
  <div class="temple-info">
      <h3 class="temple-name">${el.templeName}</h3>
      <p><span>LOCATION:</span>${el.location}</p>
      <p><span>DEDICATED:</span> ${el.dedicated}</p>
      <p><span>SIZE:</span> ${el.area}ft<sup>2</sup></p>
  </div>
  <div class="temple-image">
      <img src="${el.imageUrl}" alt="${el.templeName}"
      class="temple-img" loading="lazy">
  </div>
</div>
  `;
    }
  });

  cardContainer.innerHTML=innerChild;
  
});





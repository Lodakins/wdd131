
const crewCont = document.querySelector(".crew-info");

let count =1;

async function fetchData(parentCont){
    const response = await fetch("scripts/data.json");
    const data = await response.json();
    
    parentCont.innerHTML="";
    let childEl="";
    
    data.crew.forEach(el => {
        childEl+=` <div class="parent-cont-${count++} crew ${el.isActive ? 'active':''}">
                    <div class="crew-cont">
                        <div class="crew-details">
                        <h2 class="crew-title">${el.role}</h2>
                        <h3 class="crew-name">${el.name}</h3>
                        <p class="crew-bio">${el.bio}</p>
                        </div>
                    
                    </div>
                    <div class="space-img-cont">
                    <img src="${el.images.png}"  alt="crew-image"  class="space-image" loading="lazy">
                    </div>
                    </div>`
    });

    parentCont.innerHTML=childEl;
    
}

fetchData(crewCont);

let timerCount=1;

document.addEventListener("DOMContentLoaded", (event) => {
    setInterval(()=>{
        const crews = document.querySelectorAll('.crew-info .crew');
        crews.forEach((el)=>{
            el.classList.remove('active');
            if(el.classList.contains(`parent-cont-${timerCount}`)){
                el.classList.add('active');
            };
        });
        timerCount= timerCount == 4 ? 1 :  timerCount+1;
    },6000);
});

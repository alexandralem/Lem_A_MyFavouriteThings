import { getData } from "./modules/dataMiner.js";

(() => {
    let cardholders = document.querySelectorAll(".card"),
        thingName = document.querySelector(".name"),
        thingDesc = document.querySelector(".desc"),
        thingType = document.querySelector(".type"),
        faveData;

    

    gsap.from('header', {
        duration: 1.8,
        opacity: 0,
        y: 100,
        delay: 1,
        skewY: 10,
        ease: "power4.out",
        stagger: { amount: 0.4,},
    });
    

    function buildThings(data) {
        
        faveData = data;
      
        cardholders.forEach(cardholder => {
            console.log(cardholder.id);
            cardholder.firstElementChild.src = `images/${data[cardholder.id].pic}`;
            cardholder.addEventListener('click', showInfo);
        })

        
    }

    function showInfo() {
        thingName.textContent = faveData[this.id].name;
        thingDesc.textContent = faveData[this.id].desc;
        thingType.textContent = faveData[this.id].type;
    }



    getData(`./data.json`, buildThings);
})();
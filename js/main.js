import { getData } from "./modules/dataMiner.js";

(() => {
    let theBtns = document.querySelector(".btns"),
        theTemplate = document.querySelector("#card-template").content,
        faveData;
        

    function buildThings(data) {

        faveData = data;
        const things = Object.keys(data);

        things.forEach(thing => {
            let panel = theTemplate.cloneNode(true);
            let containers = panel.firstElementChild.children;

            containers[0].querySelector("img").src = `images/${data[thing].pic}`;
            containers[0].querySelector("img").id = thing;
            
            theBtns.appendChild(panel);
        })
      
        

    }

    getData(`./data.json`, buildThings);

})();
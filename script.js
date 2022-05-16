// funzione numeri random
let randommynum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// funzione genera numeri da 1 a tot tutti diversi
function creaRandomNum(maxRange, min, max) {
    const arreyInt = [];
    while (arreyInt.length < maxRange){
        let RandomNumInt = randommynum(min, max);
        if (!arreyInt.includes(RandomNumInt)){
            arreyInt.push(RandomNumInt);
        }
    }
    return arreyInt;
}

const numUno100 = creaRandomNum(100, 1, 100);
console.log(numUno100);
const numUno81 = creaRandomNum(81, 1, 81);
const numUno49 = creaRandomNum(49, 1, 49);
const bombe100 = creaRandomNum(16, 1, 100);
console.log(bombe100);
const bombe81 = creaRandomNum(16, 1, 81);
const bombe49 = creaRandomNum(16, 1, 49);


// creare blocchetti tramite js
const createmyElement = (elemAggiuto, classAggiuta) => {
    const node = document.createElement(elemAggiuto);
    node.className = classAggiuta;
    return node;
}

const inputUser = document.querySelector("input");
const InizaGioco = document.querySelector("button");
const GridPagina = document.getElementById("grid");
const sectionNone = document.querySelector("header");

//iniza gioco al click
InizaGioco.addEventListener("click",
    function() {
        sectionNone.className = "none";

        inpuntUserParseInt = parseInt(inputUser.value);

        if (1 === inpuntUserParseInt) {
            for (let i = 0; i < 100; i++){
                const crea100 =  createmyElement("div", "square1 square");
                let arrmyItem = numUno100[i];
                crea100.append(arrmyItem);
                crea100.addEventListener("click", 
                    function () {
                            if (numUno100[i] === bombe100[i]) {
                                crea100.classList.add("squareBomba")
                            } else {
                                crea100.classList.add("squareClick")
                            }
                        }
                )
                grid.append(crea100);

            }
        } else if (inpuntUserParseInt === 2){
            for (let i = 0; i < 81; i++){
                const crea81 = createmyElement("div", "square2 square");
                crea81.append(numUno81[i]);
                crea81.addEventListener("click",
                    function () {
                        if (numUno81[i] === bombe81[i]) {
                            crea81.classList.add("squareBomba")
                        } else {
                            crea81.classList.add("squareClick")
                        }
                    }
            )
                grid.append(crea81);
            }
        } else if (inpuntUserParseInt === 3){
            for (let i = 0; i < 49; i++){
                const crea49 =  createmyElement("div", "square3 square");
                crea49.append(numUno49[i]);
                crea49.addEventListener("click",
                    function () {
                        if (numUno49[i] === bombe49[i]) {
                            crea49.classList.add("squareBomba")
                        } else {
                            crea49.classList.add("squareClick")
                        }
                    }
                )
                grid.append(crea49);

            }
        }
    }
)
  
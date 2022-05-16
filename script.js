// funzione numeri random
let randommynum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// funzione genera numeri da 1 a tot tutti diversi
function creaRandomNum(maxRange, min, max) {
    const arreyInt = [];
    while (arreyInt.length < maxRange) {
        let RandomNumInt = randommynum(min, max);
        if (!arreyInt.includes(RandomNumInt)) {
            arreyInt.push(RandomNumInt);
        }
    }
    return arreyInt;
}


// creare blocchetti tramite js
const createmyElement = (elemAggiuto, classAggiuta) => {
    const node = document.createElement(elemAggiuto);
    node.className = classAggiuta;
    return node;
}

const inputUser = document.querySelector("input");
const IniziaGioco = document.querySelector("button");
const GridPagina = document.getElementById("grid");
const sectionNone = document.querySelector("header");

//scelta utente
//iniza gioco al click
IniziaGioco.addEventListener("click",
    function () {
        let numCelle, classAggiuta;

        const chooseLevel = parseInt(inputUser.value);
        switch (chooseLevel) {

            case 1:
            default:
                numCelle = 100;
                classAggiuta = "square1";
                break;

            case 2:
                numCelle = 81;
                classAggiuta = "square2";
                break;

            case 3:
                numCelle = 49;
                classAggiuta = "square3";
        }


        const myNewRandom = creaRandomNum(numCelle, 1, numCelle);
        console.log(myNewRandom);
        const MyBomb = creaRandomNum(16, 1, numCelle);
        console.log(MyBomb);


        sectionNone.className = "none";
        let punti = 0;

        for (let i = 0; i < myNewRandom.length; i++) {
            const crea = createmyElement("div", classAggiuta);
            let arrmyItem = myNewRandom[i];
            crea.append(arrmyItem);
            crea.addEventListener("click",
                () => {
                        if (MyBomb.includes(arrmyItem)) {
                            crea.classList.add("squareBomba");
                            document.querySelector("h3").innerHTML = "Hai fatto " + punti + " punti";
                        } else {
                            crea.classList.add("squareClick");
                            punti+=10;
                            
                        }
                    
                }
            )
            grid.append(crea);
        }

    }
)

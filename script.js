let b = document.body;
let cellule = document.createElement("div");
let iptdrag = document.querySelector("#taille");
let iptspeed = document.querySelector("#vitesse");
let start = document.querySelector("#start");
let newp = document.querySelector("#p");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");


let arr = [];
let nbLignes = 26;
let nbCol = 26;
let blanc = 0;
let noir = 1;
let tps = 0;
let delay = 500;
let allSpeeds = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50];
newp.innerHTML = tps;

for (let i = 0; i < nbLignes; i++) {
    let newArr = [];
    arr.push(newArr);
    for (let x = 0; x < nbCol; x++) {
        newArr.push(blanc);
    }
}

function draw() {
    let tab = document.createElement("table");
    let tBody = document.createElement("tBody");


    // creation du tableau 

    for (let i = 0; i < nbLignes; i++) {


        let row = document.createElement("tr");


        for (let j = 0; j < nbCol; j++) {
            let cell = document.createElement("td");





            cell.addEventListener("click", e => {


                // changement de couleur au click sur les cases 

                if (cell.className != 'click') {
                    cell.className = 'click';
                    arr[i][j] = noir;
                } else {
                    cell.className = "";
                    arr[i][j] = blanc;
                }
    
                //console.log(arr);
            });
            row.appendChild(cell);
        }

        tBody.appendChild(row);
    }




    tab.appendChild(tBody);
    b.append(tab);
    //console.table(tab);
    //console.log(iptdrag);

    // redimension du tableau 





    iptdrag.addEventListener("change", e => {

        if (iptdrag.value == 1) {

            nbLignes = 22;
            nbCol = 22;

        } else if (iptdrag.value == 2) {

            nbLignes = 23;
            nbCol = 23;

        } else if (iptdrag.value == 3) {

            nbLignes = 24;
            nbCol = 24;

        } else if (iptdrag.value == 4) {

            nbLignes = 25;
            nbCol = 25;

        }
        else if (iptdrag.value == 5) {

            nbLignes = 26;
            nbCol = 26;

        } else if (iptdrag.value == 6) {

            nbLignes = 27;
            nbCol = 27;

        } else if (iptdrag.value == 7) {

            nbLignes = 28;
            nbCol = 28;

        } else if (iptdrag.value == 8) {

            nbLignes = 29;
            nbCol = 29;

        } else if (iptdrag.value == 9) {

            nbLignes = 30;
            nbCol = 30;

        }
        else if (iptdrag.value == 10) {

            nbLignes = 31;
            nbCol = 31;

        }
        //console.log(iptdrag.value);
        //console.log(iptdrag);
        //console.log(nbLignes);
        //console.log(nbCol);

    });



}
let timer2;

start.addEventListener("click", e => {

    timer2 = setInterval(function () {


        tps++;
        newp.innerHTML = tps;

        let arrTemp = [];
        for (let i = 0; i < nbLignes; i++) {
            let lineTemp = [];
            for (let j = 0; j < nbCol; j++) {
                // console.log(arr[i][j] + " = " + noir);
                let numNeighboursForDeath = 0;
                let numNeighboursForBorn = 0;
                // console.log("case zieutée : " + i + ", " + j)
                for (let k = i - 1; k <= i + 1; k++) {
                    for (let l = j - 1; l <= j + 1; l++) {
                        // console.log("k: " + k + " / l: " + l);
                        if (k !== -1 && k !== nbLignes && l !== -1 && l !== nbCol) {
                            if (arr[i][j] === noir) {
                                // console.log("ok");

                                if (k === i && l === j || arr[k][l] !== noir) {
                                    continue;
                                } else {
                                    //console.log("new voisin");
                                    numNeighboursForDeath++;
                                }
                            } else if (arr[i][j] === blanc) {

                                // console.log(k === i && l === j);
                                // console.log(arr[k][l] !== noir);
                                // console.log("k: " + k + " / l: " + l + " = " + arr[k][l]);
                                if (k === i && l === j || arr[k][l] !== noir) {
                                    continue;
                                } else {
                                    numNeighboursForBorn++;
                                }

                            }
                        }

                    }
                }

                let changed = false;
                if (arr[i][j] === noir && (numNeighboursForDeath < 2 || numNeighboursForDeath > 3)) {
                    // console.log(document.querySelector("tr:nth-child(" + (i+1) +") td:nth-child("+ (j+1) +")"));
                    document.querySelector("tr:nth-child(" + (i + 1) + ") td:nth-child(" + (j + 1) + ")").classList.remove("click");
                    lineTemp.push(blanc);
                    changed = true;
                }
                if (arr[i][j] === blanc && numNeighboursForBorn === 3) {
                    document.querySelector("tr:nth-child(" + (i + 1) + ") td:nth-child(" + (j + 1) + ")").className = "click";
                    lineTemp.push(noir);
                    changed = true;
                }
                if (!changed) {
                    lineTemp.push(arr[i][j]);
                }
            }            
            arrTemp.push(lineTemp);
        }
        //console.log(arrTemp);
        arr = arrTemp.slice();
        //console.log("finito");
    }, delay);
});

stop.addEventListener("click", e => {
    clearInterval(timer2);
});


reset.addEventListener("click", e => {
    tps = 0;
    newp.innerHTML = tps;
});

iptspeed.addEventListener("change", () => {
    clearInterval(timer2);
    delay = allSpeeds[parseInt(iptspeed.value)];
    start.click();
})



draw();



// b.append(tab);  //////  start.addEventListener("change", e => {







 // if (i === 0) {
    //     cell.style.background = "rgb(255, 250, 250)";
    // } else {
    //     cell.style.background = "rgb(0, 0, 0)";
    // }



// si iptdrag.step +=5 alors nb col && nb lignes ++ && td.style.height +5px &&  td.style.width +5px;



/*
1=22
2=23
3=24
4=25
5=26
6=27
7=28
8=29
9=30
10=31





  iptdrag.addEventListener("change", e => {

 let base=iptdrag.value
if (iptdrag.value<iptdrag.value(5)){





}




  });
tableau.deleteRow(-1)

*/


// iptdrag.addEventListener("change", e => { 

//     let base=iptdrag.value
//    if (iptdrag.value<iptdrag.value){

//        let resultat=iptdrag.value-iptdrag.value
//        console.log(resultat);



//    }






//      });






let b = document.body;
let cellule = document.createElement("div");
let iptresize = document.querySelector("#taille")
let start = document.querySelector("#start")
let newp = document.querySelector("#p")
let stop = document.querySelector("#stop")
let reset = document.querySelector("#reset")
let ajouter = document.querySelector("#ajouter")


let arr = [];
let nbLignes = 26;
let nbCol = 26;
let blanc = 0;
let noir = 1;
let tps = 0;
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
            arr.push(blanc);
            let numNeighbours = 0;




            cell.addEventListener("click", e => {


                // changement de couleur au click sur les cases 
                if (cell.className != 'click') {
                    cell.className = 'click';
                    arr[i, j].splice(noir);
                } else {
                    cell.className = "";
                    arr[i, j].splice(blanc);
                }
            });


            


            row.appendChild(cell);

        }

        tBody.appendChild(row);

        
    }



    tab.appendChild(tBody);
    b.append(tab);
    console.table(tab);



    

}



// timer du bouton start


start.addEventListener("click", e => {

    var timer2 = setInterval(function () {

        tps++;
        newp.innerHTML = tps;

    }, 1000);

stop.addEventListener("click", e => {


    clearInterval(timer2);



});

});



reset.addEventListener("click", e => {


    tps = 0;
    newp.innerHTML = tps;



});

// redimension


let resize = [{ valeur: iptresize.value = 1, nl: 26, nc: 26 },
{ valeur: iptresize.value = 2, nl: 28, nc: 28 },
{ valeur: iptresize.value = 3, nl: 30, nc: 30 },
{ valeur: iptresize.value = 4, nl: 32, nc: 32 },
{ valeur: iptresize.value = 5, nl: 34, nc: 34 },
{ valeur: iptresize.value = 6, nl: 36, nc: 36 },
{ valeur: iptresize.value = 7, nl: 38, nc: 38 },
{ valeur: iptresize.value = 8, nl: 40, nc: 40 },
{ valeur: iptresize.value = 9, nl: 42, nc: 42 },
{ valeur: iptresize.value = 10, nl: 44, nc: 44 }
];


iptresize.addEventListener("click", e => {



    document.querySelector("tr:last-child").remove(); // enlève une ligne 

    //enlever une colonne 
    document.querySelectorAll("tr").forEach(tr => {

        tr.querySelector("td:last-child").remove();
    });




});

ajouter.addEventListener("click", e => {

  


    document.querySelectorAll("tr").forEach(tr => {
        var td1 = document.createElement("td");     
        tr.appendChild(td1); 
    });
    
    let tr = document.createElement("tr");
    tr.innerHTML = document.querySelector("tr:last-child").innerHTML;
    document.querySelector("tbody").appendChild(tr);

    document.querySelectorAll("tr:last-child td").forEach(td => {
        td.className = "";
    });
});



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
        console.log(iptdrag.value);
        console.log(iptdrag);
        console.log(nbLignes);
        console.log(nbCol);

    });




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





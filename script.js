
let b = document.body;
let cellule = document.createElement("div");
let iptresize = document.querySelector("#taille")
let start = document.querySelector("#start")
let newp = document.querySelector("#p")
let stop = document.querySelector("#stop")
let reset = document.querySelector("#reset")
let ajouter = document.querySelector("#ajouter")
let changement=document.querySelector("#change")
let tab;


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
    tab = document.createElement("table");
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

    changement.addEventListener("change", e => {
        
        
        if (changement.value==26){
            nbCol = 26
            nbLignes = 26
            

        }
        else if (changement.value == 42) {
    
            nbCol = 42
            nbLignes = 42
           
            
            
        }
        else if (changement.value == 58) {
    
            nbCol = 58
            nbLignes = 58
    
        }
        else if (changement.value == 74) {
    
            nbCol = 74
            nbLignes = 74
    
        }
        else if (changement.value == 90) {
    
            nbCol = 90
            nbLignes = 90
    
        }
    
        tab.remove();
        draw();
    
    }); 

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

draw();


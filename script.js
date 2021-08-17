let b = document.body;
let cellule = document.createElement("div");
let iptdrag = document.querySelector("#taille")


let tab = [];
let nbLignes = 26;
let nbCol = 26;
let blanc = 0;
let noir = 1;






function draw() {
    let newTabHtml = document.createElement("table");
    let newtBodyHtml = document.createElement("tBody");



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
        console.log(iptdrag.value);

         // creation du tableau 
         for (let i = 0; i < nbLignes; i++) {

            
            let row = document.createElement("tr");


            for (let j = 0; j < nbCol; j++) {
                let cell = document.createElement("td");

                
                cell.addEventListener("click", e => {


                    // changement de couleur au click sur les cases 
                    if (cell.className != 'click') {
                        cell.className = 'click';
                    } else {
                        cell.className = "";
                    }
                });

                row.appendChild(cell);

                


            }

            newtBodyHtml.appendChild(row);

            


        }
    
    
    });


       
        newTabHtml.appendChild(newtBodyHtml);
        b.append(newTabHtml);
        console.table(tab);
        console.log(iptdrag);

        // redimension du tableau 

 




        






    }



draw();


// b.append(tab);





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



*/

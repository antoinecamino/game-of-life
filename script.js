let tab = [];
let nbLignes = 27;
let nbCol = 30;
let blanc = 0;
let noir = 1;

let b = document.body;
let cellule = document.createElement("div");


function draw() {
    let newTabHtml = document.createElement("table");
    let newtBodyHtml = document.createElement("tBody");
    // let newTab = [];
    for (let i = 0; i < nbLignes; i++) {
        let row = document.createElement("tr");


        for (let j = 0; j < nbCol; j++) {
             let cell = document.createElement("td");

            
            cell.addEventListener("click", e => {

                

                if (cell.className != 'click') {
                    cell.className = 'click';
                } else  {
                    cell.className = "";
                }
                console.log(cell.className);

            });

            row.appendChild(cell);


        }

        newtBodyHtml.appendChild(row);

        // tab.push(newTab);
    }
    newTabHtml.appendChild(newtBodyHtml);
    b.append(newTabHtml);
    console.table(tab);






}



draw();


// b.append(tab);





 // if (i === 0) {
    //     cell.style.background = "rgb(255, 250, 250)";
    // } else {
    //     cell.style.background = "rgb(0, 0, 0)";
    // }




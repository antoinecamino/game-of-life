let tab = [];
let nbLignes = 30;
let nbCol = 30;
let blanc = 0;
let noir = 1 ;

let b = document.body;
let cellule = document.createElement("div"); 


function draw(){        
    let newTabHtml = document.createElement("table");
    let newtBodyHtml = document.createElement("tBody");
    // let newTab = [];
    for (let i =0; i< nbLignes ; i++){
        row = document.createElement("tr");

        
        for (let j=0; j<nbCol; j++){
            cell = document.createElement("td");

            row.appendChild(cell)


            // if (i === 0) {
            //     cell.style.background = "rgb(255,0,0)";
            // } else {
            //     cell.style.background = "rgb(0,191,255)";
            // }

            // newTab.push(cellule.style.backgroundColor = "#00BFFF");
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
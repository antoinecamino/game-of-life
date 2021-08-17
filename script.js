let tab = [];
let nbLignes = 30;
let nbCol = 30;
let blanc = 0;
let noir = 1 ;

let b = document.body;
let cellule = document.createElement("div"); 


function draw(){     
    let c = 0;   
    let newTabHtml = document.createElement("table");
    let newtBodyHtml = document.createElement("tBody");
    for (let i =0; i< nbLignes ; i++){
        row = document.createElement("tr");

        
        for (let j=0; j<nbCol; j++){
            cell = document.createElement("td");

            row.appendChild(cell)


            if (c === 0) {
                cell.style.background = "rgb(0,191,255)";
            } else {
                cell.style.background = "rgb(255,0,0)";
            }

        }
        newtBodyHtml.appendChild(row);

    }
    newTabHtml.appendChild(newtBodyHtml);
    b.append(newTabHtml);
    console.table(tab);

    
}

draw();


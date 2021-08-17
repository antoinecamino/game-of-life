
let nbLignes = 30;
let nbCol = 30;

let b = document.body;
let cellule = document.createElement("div");
let blanc = 0;
let noir =1; 


function draw(){   
    let newTabHtml = document.createElement("table");
    let newtBodyHtml = document.createElement("tBody");
    


    for (let i =0; i< nbLignes ; i++){
        row = document.createElement("tr");

        
        for (let j=0; j<nbCol; j++){            
            let cell = document.createElement("td");
            let numNeighbours = 0;

            row.appendChild(cell)

            cell.addEventListener("click", function(e){
                if (cell.className === "click"){
                    cell.classList.remove("click");
                }else{
                    cell.className = "click";
                }
            })


            if (newTabHtml[i][j].className === "click"){
                for (let k = i-1; k< i+1; k++ ){
                    for (let l= j-1; l< i+1; l++){
                        if (newTabHtml[k][l].className !== "click"){
                            continue;
                        }else{
                            numNeighbours ++;
                        }
                    }
                }
                if (numNeighbours<2 || numNeighbours>3){
                    newTabHtml[i][j].classList.remove("click");
                }
            }


        }
        newtBodyHtml.appendChild(row);

    }
    newTabHtml.appendChild(newtBodyHtml);
    b.append(newTabHtml); 
}

draw();


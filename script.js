let arr = [];
let nbLignes = 30;
let nbCol = 30;

let b = document.body;
let cellule = document.createElement("div");
let blanc = 0;
let noir = 1; 


for (let i =0; i< nbLignes ; i++){
    let newArr = [];
    arr.push(newArr);
    for (let x=0; x< nbCol; x++){
        newArr.push(blanc);
    }

}


function draw(){   
    let tab = document.createElement("table");
    let tBody = document.createElement("tBody");
    


    for (let i =0; i< nbLignes ; i++){
        row = document.createElement("tr");

        
        for (let j=0; j<nbCol; j++){            
            let cell = document.createElement("td");
            arr.push(blanc);
            let numNeighbours = 0;

            row.appendChild(cell)

            cell.addEventListener("click", function(e){
                if (cell.className === "click"){
                    cell.classList.remove("click");
                    arr[i,j].splice(blanc);

                }else{
                    cell.className = "click";
                    arr[i,j].splice(noir);
                }
            })


            if (arr[i][j] === noir){
                for (let k = i-1; k< i+1; k++ ){
                    for (let l= j-1; l< i+1; l++){
                        if (arr[k][l] !== noir){
                            continue;
                        }else{
                            numNeighbours ++;
                        }
                    }
                }
                if (numNeighbours<2 || numNeighbours>3){
                    tab[i][j].classList.remove("click");
                    arr[i,j].splice(blanc);
                }
            }


        }
        tBody.appendChild(row);

    }
    tab.appendChild(tBody);
    b.append(tab); 
}

draw();


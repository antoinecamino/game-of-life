
let nbLignes = 30;
let nbCol = 30;

let b = document.body;
let cellule = document.createElement("div"); 


function draw(){   
    let newTabHtml = document.createElement("table");
    let newtBodyHtml = document.createElement("tBody");
    


    for (let i =0; i< nbLignes ; i++){
        row = document.createElement("tr");

        
        for (let j=0; j<nbCol; j++){            
            let cell = document.createElement("td");
            row.appendChild(cell)

            cell.addEventListener("click", function(e){
                if (cell.className === "click"){
                    cell.classList.remove("click");
                }else{
                    cell.className = "click";
                }
            })




           

        }
        newtBodyHtml.appendChild(row);

    }
    newTabHtml.appendChild(newtBodyHtml);
    b.append(newTabHtml);

   

    
}

draw();


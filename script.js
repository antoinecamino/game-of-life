
let b = document.body;

let tab = [];
let nbLignes = 30;
let nbCol = 30;
let blanc = 0;
let noir = 1;






for (let i = 0; i < nbLignes; i++) {
    let newTab = [];

    for (let j = 0; j < nbCol; j++) {
        let cellule = document.createElement("div");
        newTab.push(cellule);
        b.append(cellule);

    }

    tab.push(newTab);
}
console.table(tab);








//cellule.textContent= draw(); 

//cellule.style.backgroundColor="blue"

//  elements += "<li>" + texteContact(contacts[i]) + "</li>";
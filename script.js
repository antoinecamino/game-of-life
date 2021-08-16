let tab = [];
let nbLignes = 30;
let nbCol = 30;

tab.length = nbLignes; 

for (let i =0; i<= nbLignes ; i++){
    let newTab = [];
    newTab.length = nbCol;
    tab.push(newTab);

}
console.log(tab);
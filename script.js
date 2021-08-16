let tab = [];
let nbLignes = 30;
let nbCol = 30;
let blanc = 0;
let noir = 1 ;



for (let i =0; i< nbLignes ; i++){
    let newTab = [];
    tab.push(newTab);
    for (let i=0; i<nbLignes; i++){
        newTab.push(blanc);
    }

}
console.table(tab);
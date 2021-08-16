let tab = [];
let nbLignes = 30;
let nbCol = 30;
let blanc = 0;
let noir = 1 ;



for (let i =0; i< nbLignes ; i++){
    let newTab = [];
    
    for (let j=0; j<nbCol; j++){
        newTab.push(blanc);
    }

    tab.push(newTab);
}
console.table(tab);
"use stric"


let monthArr = ['sausis', 'vasaris', 'kovas', 'balandis', 'geguze', 'birzelis', 'liepa', 'rugpjutis', 'rugsejis', 'spalis', 'lapkritis', 'gruodis']

function generateTable(dataAccount){
    let HTML = '';
    if (!Array.isArray(dataAccount)){
        return console.error("Reikia Array");
    }

for (let i = 0; i< dataAccount.length; i++){
   
    HTML += `
        <div class="table-row">
            <div class="cell">I</div>
            <div class="cell">${dataAccount[i].month}</div>
            <div class="cell">${dataAccount[i].income}</div>
            <div class="cell">${dataAccount[i].expense}</div>
            <div class="cell"></div>
        </div>
    `
    }

    let tableContent = document.querySelector('.table-content');

    return tableContent.innerHTML = HTML;

}

generateTable(account)


function generateSummary(data){
    let biggestMonth = 1;
    for (let j = 0; j<data.length; j++){
      if (biggestMonth > data[j].income){
          biggestMonth = data[j].income
      }
    
      return biggestMonth
    
    }
   
}

generateSummary(account)



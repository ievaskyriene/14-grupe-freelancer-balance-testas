"use stric"


let monthArr = ['sausis', 'vasaris','kovas','balandis','geguze','birzelis','liepa', 'rugpjutis','rugsejis','spalis','lapkritis','gruodis']

function compareM(a, b){
    if (a.month < b.month){
        return -1;
    }
    if (a.month > b.month){
        return 1;
    }
   else return 0
}
account.sort(compareM)


function generateTable(dataAccount){
    let HTML = '';
    if (!Array.isArray(dataAccount)){
        return console.error("Reikia Array");
    }


function generateBalance(dataBalance){
    let income = 0;
    let expense = 0;
    let balance  = 0;
    let balanceAcc = 0;
    let balanceArr = [];

    for(let i = 0; i<dataBalance.length; i++){
       
        income  = dataBalance[i].income;
        expense = dataBalance[i].expense;

        if (typeof dataBalance[i].income !== "number"){
            balance = -dataBalance[i].expense;
        }

        else if (typeof dataBalance[i].expense !== "number"){
            balance = dataBalance[i].income;
        }

        else 
        balance = dataBalance[i].income - dataBalance[i].expense;
        balanceAcc += balance
        balanceArr.push(balanceAcc) 
        
    }

return balanceArr
}

for (let i = 0; i< dataAccount.length; i++){
   
    HTML += `
        <div class="table-row">
            <div class="cell">${i+1}</div>
            <div class="cell">${monthArr[i]}</div>
            <div class="cell">${dataAccount[i].income ? dataAccount[i].income : "-"}</div>
            <div class="cell">${dataAccount[i].expense ? dataAccount[i].expense : "-"}</div>
            <div class="cell">${generateBalance(dataAccount)[i]}</div>
        </div>
    `
    }

    let tableContent = document.querySelector('.table-content');
    return tableContent.innerHTML = HTML;

}



generateTable(account)


function TableFooter(dataFooter){
    let HTML = ""
    let totalIncome = 0;
    let totalExpense = 0;
    let totalBalance = 0;
    let footer = document.querySelector('.table-footer')
    for(let j = 0; j<dataFooter.length; j++){
        HTML = `
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"> ${totalIncome}Eur</div>
        <div class="cell"> ${totalExpense}Eur</div>
        <div class="cell"> ${totalBalance}Eur</div>
        
        `

        if (typeof dataFooter[j].income == 'number'){
            totalIncome += dataFooter[j].income;
            }

        if (typeof dataFooter[j].expense == 'number'){
            totalExpense += dataFooter[j].expense;
        }

        totalBalance = totalIncome - totalExpense;

       

     
           
        


    }

    return footer.innerHTML = HTML
}

    TableFooter(account)

    /*return footer.innerHTML = HTML

    function generateIncome(){
        let totalIncome = 0;
        //let totalExpense = 0;
        //let totalBalance = 0;

        for (let i = 0; i < dataFooter.length; i++){
            if (typeof dataFooter[i].income == 'number'){
            totalIncome += dataFooter[i].income;
            }
        }

        return totalIncome
    }

    function generateIncome(){
        let totalIncome = 0;
        //let totalExpense = 0;
        //let totalBalance = 0;

        for (let i = 0; i < dataFooter.length; i++){
            if (typeof dataFooter[i].income == 'number'){
            totalIncome += dataFooter[i].income;
            }
        }

        return totalIncome
    }

    function generateExpense(){
        let totalExpense = 0;
        //let totalBalance = 0;

        for (let i = 0; i < dataFooter.length; i++){
            if (typeof dataFooter[i].expense == 'number'){
                totalExpense += dataFooter[i].expense;
            }
        }

        return totalExpense
    }

        function balance(){
            let totalBalance = totalIncome - totalExpense;
            
            console.log(totalBalance)
        }

       
       
    


}*/



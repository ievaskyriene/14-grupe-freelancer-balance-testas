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
    if (!Array.isArray(dataAccount)){
        return console.error("Reikia Array");
    }

        let HTML = '';
        let income = 0;
        let expense = 0;
        let balance  = 0;
        let balanceAcc = 0;
        let balanceArr = [];
        let incomeArr = [];
        let expenseArr = [];
        let largestExMonth;
        let largesEx = 0;
        let largestInc = 0;
        let largestIncMonth;
        let smallInc = dataAccount[0].income;
        let smallIncMonth;
        let smallExp = dataAccount[0].expense;
        let smallExMonth;
        let summary = document.querySelector('.summary-list')
        let tableContent = document.querySelector('.table-content');

    //skaiciuoja ir kaupia balansa
    for(let i = 0; i<dataAccount.length; i++){
        income  = dataAccount[i].income;
        expense = dataAccount[i].expense;

        if (typeof dataAccount[i].income !== "number"){
            balance = -dataAccount[i].expense;
        }
        else if (typeof dataAccount[i].expense !== "number"){
            balance = dataAccount[i].income;
        }
        else 
            balance = dataAccount[i].income - dataAccount[i].expense;
        
        //padaro islaidu ir pajamu masyvus
        if (typeof dataAccount[i].income == "number"){
            incomeArr.push(dataAccount[i].income)
        }

        if (typeof dataAccount[i].expense == "number"){
            expenseArr.push(dataAccount[i].expense)
        }

        //iesko didziausiu ir maziausiu pajamu
        for(let j = 0; j<incomeArr.length; j++){
            if(largestInc < incomeArr[j]){
                largestInc = incomeArr[j]
                largestIncMonth = dataAccount[i].month   
            }  
           
            if(smallInc>incomeArr[j]){
                smallInc = incomeArr[j]
                smallIncMonth = dataAccount[i].month 
            }
        }
       
        //iesko didziausiu ir maziausiu islaidu
        for(let e = 0; e<expenseArr.length; e++){
            if(largesEx < expenseArr[e]){
                largesEx = expenseArr[e]
                largestExMonth = dataAccount[i].month   
            }  

            if(smallExp > expenseArr[e]){
                smallExp = expenseArr[e]
                smallExMonth = dataAccount[i].month 
            }
        }
       
        //kaupia balansa
        balanceAcc += balance
        balanceArr.push(balanceAcc) 

        //generuoja pati lenteles turini
        HTML += `
            <div class="table-row">
                <div class="cell">${i+1}</div>
                <div class="cell">${monthArr[i]}</div>
                <div class="cell">${dataAccount[i].income ? dataAccount[i].income : "-"}</div>
                <div class="cell">${dataAccount[i].expense ? dataAccount[i].expense : "-"}</div>
                <div class="cell">${balanceArr[i]}</div>
            </div>
        `
    }

    tableContent.innerHTML = HTML;

    HTMLSummary = `
    <div class="item">
    <div id="minIncome" class="value">${monthArr[smallIncMonth-1]}  </div>
    <div class="title">mėnuo, kai buvo mažiausiai uždirbta,bet ne lygu nuliui</div>
</div>
<div class="item">
    <div class="value">${monthArr[largestIncMonth-1]} </div>
    <div class="title">mėnuo, kai buvo daugiausiai uždirbta</div>
</div>
<div class="item">
    <div class="value">${monthArr[smallExMonth-1]}</div>
    <div class="title">mėnuo, kai buvo mažiausiai išlaidos, bet ne lygios nuliui</div>
</div>
<div class="item">
    <div class="value">${monthArr[largestExMonth-1]} </div>
    <div class="title">mėnuo, kai buvo didžiausios išlaidos</div>
</div>
    `
    summary.innerHTML = HTMLSummary;
    return
}

generateTable(account)

// generuoja footeri
function TableFooter(dataFooter){
    let HTML = ""
    let totalIncome = 0;
    let totalExpense = 0;
    let totalBalance = 0;
    let footer = document.querySelector('.table-footer')
  
    for(let j = 0; j<dataFooter.length; j++){
    
        if (typeof dataFooter[j].income == 'number'){
           totalIncome += dataFooter[j].income;
        }

        if (typeof dataFooter[j].expense == 'number'){
            totalExpense += dataFooter[j].expense;
        }
        totalBalance = totalIncome - totalExpense;
    }

    HTML = `
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"> ${totalIncome}Eur</div>
    <div class="cell"> ${totalExpense}Eur</div>
    <div class="cell"> ${totalBalance}Eur</div>
    `

    return footer.innerHTML = HTML
}

    console.log(TableFooter(account))

   
"use strict";

function render(data, men){
   
    let HTML = '';
    let totalIncome = 0;
    let totalExpense = 0;
    let minIncomeMonth = {index:1, value:Infinity};
    let maxIncomeMonth = {index:1, value:0};
    let minExpenseMonth = {index:1, value:Infinity};
    let maxExpenseMonth = {index:1, value:0};
    const DomTotalBalans = document.querySelector('.table-footer > .cell:nth-child(5)');
    const DomTotalIncome = document.querySelector('.table-footer > .cell:nth-child(3)');
    const DomTotalExpense = document.querySelector('.table-footer > .cell:nth-child(4)');
    const mainIncome = document.querySelector('.table-footer > .cell:nth-child(4)');
    const DomMinIncome = document.getElementById('minIncome');
    const DomMaxIncome = document.getElementById('maxIncome');
    const DomMinExpense = document.getElementById('minExpense');
    const DomMaxExpense = document.getElementById('maxExpense');

   
    // let array = account;
    // array = array.sort( (m, n) => ( m.month - n.month) ? 1: -1)
    //surikiuojami skaiciai nuo 1-12
    let orderedData = [];
    for(let i=0; i<account.length; i++){
        const searchfor = i+1;
        for(let m=0; m<account.length; m++){
            if(account[m].month === searchfor){
                orderedData.push(account[m]);
                break;
            }
        }
    }

    let monthBalance = 0;
    for(let i=0; i< orderedData.length; i++){
        
        const mon =  orderedData[i];
        const income = mon.income || 0;
        const expense = mon.expense || 0;

        monthBalance += income - expense;
        totalIncome += income;
        totalExpense += expense;

       /* let minIncomeMonth = {index:1, value:Infinity};
        let maxIncomeMonth = {index:1, value:0};
        let minExpenseMonth = {index:1, value:Infinity};
        let maxExpenseMonth = {index:1, value:0};*/

        //minIncome
        if(income < minIncomeMonth.value && income !== 0){
            minIncomeMonth.value = income;
            minIncomeMonth.index = i;
        }
        //maxIncome
        if(income > maxIncomeMonth.value){
            maxIncomeMonth.value = income;
            maxIncomeMonth.index = i;
        }
        //minExpense
        if(expense < minExpenseMonth.value  && expense !== 0){
            minExpenseMonth.value = expense;
            minExpenseMonth.index = i;
        }
        //maxExpense
        if(expense > maxExpenseMonth.value){
           maxExpenseMonth.value = expense;
           maxExpenseMonth.index = i;
        }
    
        //${mon.income ? mon.income+'Eur' : '-'} tas patas kas ${income > 0 ? income+'Eur' : '-'}
        //${mon.expense ? mon.expense+'Eur' : '-'} tas patas kas  ${expense > 0 ? expense+'Eur' : '-'}
        HTML+=`
        <div class="table-row">
            <div  class="cell">${i+1}</div>
            <div  class="cell">${months[mon.month-1]}</div>
            <div  class="cell">${mon.income ? mon.income+'Eur' : '-'}</div>
            <div  class="cell">${mon.expense ? mon.expense+'Eur' : '-'}</div>
            <div  class="cell">${monthBalance}</div>
        </div>`
    }
    
    DomTotalIncome.innerHTML = totalIncome+'Eur';
    DomTotalExpense.innerHTML = totalExpense+'Eur';
    DomTotalBalans.innerHTML = monthBalance+'Eur';
    document.querySelector('.table-content').innerHTML = HTML;

    DomMinIncome.innerText = months[minIncomeMonth.index];
    DomMaxIncome.innerText = months[maxIncomeMonth.index];
    DomMinExpense.innerText = months[minExpenseMonth.index];
    DomMaxExpense.innerText = months[maxExpenseMonth.index];
    


    return 
}


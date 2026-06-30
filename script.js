document.addEventListener("DOMContentLoaded",()=>{
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");
  let expenses=JSON.parse(localStorage.getItem("expenses"))||[];
  renderExpenses();
  expenseForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const expenseName=expenseNameInput.value.trim();
    const expenseAmount=parseFloat(expenseAmountInput.value.trim());
    if(expenseName!==""&&expenseAmount>0){
      const newExpense={
        id:Date.now(),
        name:expenseName,
        amount:expenseAmount,
      }
      expenses.push(newExpense);
      saveExpensesToLocal();
      renderExpenses();
      updateTotal();
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

    function renderExpenses(){
      expenseList.innerHTML="";
      expenses.forEach(ex=>{
        const li=document.createElement("li");
        li.innerHTML=`
         ${ex.name}-${ex.amount}
         <button data-id="${ex.id}">delete</button>
        `;
        expenseList.appendChild(li);
      });  
    }
    function updateTotal(){
         let totalAmount=0;
          expenses.forEach(e=>
        totalAmount+=e.amount
        );
         totalAmountDisplay.textContent=totalAmount.toFixed(2);
        }
    function saveExpensesToLocal(){
  localStorage.setItem("expenses",JSON.stringify(expenses));
    }
    
    
     expenseList.addEventListener("click",(e)=>{
        if(e.target.tagName==="BUTTON"){
           const expenseId=parseInt(e.target.getAttribute("data-id"));
           expenses=expenses.filter((expense)=>expense.id!==expenseId
           );
          saveExpensesToLocal();
          renderExpenses();
          updateTotal(); 
        }
        
     });
    
});
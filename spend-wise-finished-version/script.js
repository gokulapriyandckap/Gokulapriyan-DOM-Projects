// //Targeting all the required nodes for the task

// const balance = document.getElementById('balance');
// const list = document.getElementById('list');
// const form = document.getElementById('form');
// const text = document.getElementById('text');
// const amount = document.getElementById('amount');
// const listHeader = document.getElementById("history");

// //Event listener for addding an item
// form.addEventListener('submit', addTransaction);


// //Event listener for removing an item
// list.addEventListener("click",removeTransaction)


// // Add transactions to DOM list
// function addTransactionToDOM(transaction) {

//   // Get sign
//   const sign = transaction.amount < 0 ? '-' : '+';

//   // Creating an LI element 
//   const item = document.createElement('li');

//   // Adding class based on value
//   item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

//   // Adding the new item to the list

//   // Note: Math.abs will remove the sign from the amount
//   // Eg: -5 => 5,
//   //  10 => 10

//   item.innerHTML = `
//     ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn">x</button>
//   `;

//   list.appendChild(item);

//   //Clearing Input Fields after adding an item

//   text.value = ""
//   amount.value = ""
// }

// // Update the balance, income and expense
// function updateValues() {
//   //Getting all the list items
//   let allItems = document.querySelectorAll("li")

//   //initialize the total value to zero
//   let total = 0;

//   // Loop throught the list items to get the item amount
//   // and add all the values

//   for (let i = 0; i < allItems.length; i++) {
//     //getting the every item amount
//     let itemAmount = allItems[i].children[0].innerText
//     // Converting the item amount in string to number
//     itemAmount = Number(itemAmount)
//     // Adding all the listed item values 
//     total = total + itemAmount
//   }

//   // Displaying the total amount

//   balance.innerText = total;

// }

// // Add transaction
// function addTransaction(e) {
//   e.preventDefault();

//   if (text.value.trim() === '' || amount.value.trim() === '') {
//     alert('Please add a text and amount');
//   } else {

//     //For every added item, we will create this transaction object and pass to addTransactionDOM function
//     const transaction = {
//       text: text.value,
//       amount:Number(amount.value)
//     };

//     // Below function, will create new item every time, when the user adds new item to the list

//     addTransactionToDOM(transaction);

//     // below function calcutes the total balance

//     updateValues();

//   }
// }


// // Remove transaction
// function removeTransaction(e) {

//   // Remove the list item from dom
//   e.target.parentElement.remove();

//   // below function calcutes the total balance;
//   updateValues();
// }




const balance = document.getElementById("balance");
const textinput = document.getElementById("text");
const numberinput = document.getElementById("amount");
const ul = document.getElementById("list");
const form = document.getElementById("form");

form.addEventListener("submit",addTransaction);



function addTransactionToDom(transaction) {
  const sign = transaction.amount <0 ? "-":"+";

  const  li = document.createElement("li");

  li.classList.add(transaction.amount<0? "minus":"plus");


  li.innerHTML =`${transaction.text} <span>${sign}${Math.abs(transaction.amount)} </span> <button id ="delete-btn" class ="delete-btn">X</button>`;

 
  ul.appendChild(li);

}



function updateValues(){
  const allItems = document.querySelectorAll("li");
  let total = 0;
  for (let i = 0; i < allItems.length; i++) {
    let itemAmount = Number(allItems[i].children[0].innerText);

    total += itemAmount
  }  
  balance.innerText = total;
  // console.log(total)
}

function addTransaction(e){
  e.preventDefault();
  if (textinput.value.trim() === "" || numberinput.value.trim() === ""){
    alert("Please add a text amount")
  }else{
    const transaction={
      text:textinput.value,
      amount:Number(numberinput.value) 
    }
    addTransactionToDom(transaction);
    updateValues();


    let deletebtn = document.querySelectorAll("#delete-btn");
    for(let i=0;i<deletebtn.length;i++){
      deletebtn[i].addEventListener("click",(e)=>{
        e.target.parentElement.remove()
         updateValues();

      })
    }
    // console.log(deletebtnn.length)

  } 
};





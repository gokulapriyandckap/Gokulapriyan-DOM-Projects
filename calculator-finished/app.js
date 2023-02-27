// Note: currently we are supporting only single number operation
// only in this calculator
// Supported
// Example: 7+7, 7*8

// Not Supported
// Example 77+68, 89*29

// Selecting all buttons

// const buttons = document.querySelectorAll("#btn");
// const result = document.querySelector("#result");

// console.log(buttons)

// function addNumToDisplay(e) {
  // We need to handle three cases
  // 1. If they click "Clear" we need to clear the display value one by one
  // 2. If they not clicked "=" we need to update the display with button value
  // 3. If they click "=" we need to calculate the result of that data

  //On clicking clear, we update the result by removing the last letter

  // check this e.target
  // console.log(e.target.innerText);

  // if (e.target.innerText === "C") {
  //   result.innerText = result.innerText.slice(0, result.innerText.length - 1);
  // }

  // when they have not clicked "=" , we updated the display with key value
  // else if (e.target.innerText !== "=") {
    // console.log(result.innerText);
    //we are updating exisisting result value with the user clicked key value
    // result.innerText = result.innerText + e.target.innerText;
    // also can be written as
    // result.innerText += e.target.innerText;
  // }

  // when they clicked "=", we will calculate the result by calculateResult Function
  // else {
    //we need split the string in array of strings
    //for example
    //"1+2" => ["1","+","2"]
    // first array value 1=> will be first Number
    // second array value + => will be operator
    // third array value 2=> will be second Number

    // const splitValues = result.innerText.split("");
    // console.log(splitValues);

    // send the three values to this function calculateResult

//     result.innerText = calculateResult(
//       splitValues[0],
//       splitValues[1],
//       splitValues[2]
//     );
//   }
// }

// function calculateResult(firstNum, operator, secondNum) {
  // this function only purpose is to calculate the result based on the input given

  // we can't perform addition or subtraction directly using firstNum and seconNumber
  // Remember they are string, you need to convert them as number before performing calculation
  // Number is used to convert string to number

  //Note: Here am Returning the result of the calcuation from this function
//   switch (operator) {
//     case "+":
//       return Number(firstNum) + Number(secondNum);
//     case "-":
//       return Number(firstNum) - Number(secondNum);
//     case "*":
//       return Number(firstNum) * Number(secondNum);
//     case "/":
//       return Number(firstNum) / Number(secondNum);
//     default:
//       return "Wrong Input";
//   }
// }

// Adding event listner to each button by looping through it

// for (let i = 0; i < buttons.length; i++) {
  // addNumToDisplay is a function , called when the any of the button is clicked
//   buttons[i].addEventListener("click", addNumToDisplay);
// }

//Event delegation alternative way instead of looping
//Instead of adding event listener to child
//directly add to parent

// const buttonContainer = document.querySelector("#btn-house");

// buttonContainer.addEventListener("click", addNumToDisplay);


// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("mouseover", function addNumToDisplay(e) {
//     if (e.target.innerText === "C") {
//       result.innerText = result.innerText.slice(0, result.innerText.length - 1);
//     }
//     else if (e.target.innerText !== "=") {
//       result.innerText = result.innerText + e.target.innerText;
//     }
//     else {
//       const splitValues = result.innerText.split("");
//       result.innerText = calculateResult(
//         splitValues[0],
//         splitValues[1],
//         splitValues[2]
//       );
//     }
//   });
// }
// function calculateResult(firstNum, operator, secondNum) {

//   switch (operator) {
//     case "+":
//       return Number(firstNum) + Number(secondNum);
//     case "-":
//       return Number(firstNum) - Number(secondNum);
//     case "*":
//       return Number(firstNum) * Number(secondNum);
//     case "/":
//       return Number(firstNum) / Number(secondNum);
//     default:
//       return "Wrong Input";
//   }
// };










// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("mouseover",(e)=>{
//     if (e.target.innerText === "C") {
//       result.innerText = result.innerText.slice(0,result.innerText-1)
//     }
//     else if(e.target.innerText !== "="){
//       result.innerText = result.innerText + e.target.innerText
//     }
//     else{
//       let splitValues = result.innerText.split("")
//       result.innerText = calculateresult(
//         splitValues[0],
//         splitValues[1],
//         splitValues[2])
//     }
//   })
// }

// function calculateresult(firstnum, operator, secondnum) {
//   switch (operator) {
//     case "+":
//   return Number(firstnum) + Number(secondnum);
//   case "-":
//   return Number(firstnum) - Number(secondnum);
//   case "*":
//   return Number(firstnum) * Number(secondnum);
//   case "/":
//   return Number(firstnum) / Number(secondnum);
//   }
// }
















// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click",(e)=>{
//     if (e.target.innerText === "C"){
//       result.innerText = result.innerText.slice(0,result.innerText-1)
//     }
//     else if (e.target.innerText !== "=") {
//       result.innerText = result.innerText+e.target.innerText
//     }
//     else{
//       const splitValues = result.innerText.split('')
//       result.innerText = calculateresult
//       (splitValues[0],
//         splitValues[1],
//         splitValues[2])
//     }
//   })  
// }

// function calculateresult(firstnum,operator,secondnum) {
//   switch (operator) {
//     case "+":
//       return Number(firstnum) + Number(secondnum);
//     case "-":
//       return Number(firstnum) - Number(secondnum);
//     case "*":
//       return Number(firstnum) * Number(secondnum)
  
//     default:
//         return Number(firstnum) / Number(secondnum);
//   }
// }

// const buttons = document.querySelectorAll("#btn");
// const result = document.querySelector("#result");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click",function(e){
//     if (e.target.innerText === "C"){
//       result.innerText = result.innerText.slice(0,result.innerText.length-1)
//     }
//     else if(e.target.innerText  !== "="){
//       result.innerText = result.innerText + e.target.innerText
//     }
//     else{
//       const splitValues = result.innerText.split("")
//       result.innerText = calculation(
//         splitValues[0],
//         splitValues[1],
//         splitValues[2]
//       )
//     }
//   })
// }
// function calculation(firstnum,operator,secondnum){
//   switch (operator) {
//     case "+":
//       return Number(firstnum) +  Number(secondnum);
//     case "-":
//       return Number(firstnum) -  Number(secondnum);
//     case "*":
//       return Number(firstnum) *  Number(secondnum);  
//     default:
//       return Number(firstnum) /  Number(secondnum);  
//   }
// }

// const btns = document.querySelectorAll('button');
// // console.log(btns);
// const result= document.querySelector('#result');
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click",(e)=>{
// if (e.target.innerText === "C"){
//   result.innerText = result.innerText.slice(0,result.innerText.length-1)
// }
// else if(e.target.innerText !== "="){
// result.innerText = result.innerText + e.target.innerText
// }
// else {
//   const splitValues = result.innerText.split('');
//   result.innerText = calculation(
//     splitValues[0],
//     splitValues[1],
//     splitValues[2])
// }
//   })
// }
// function calculation(firstnum,operator,secondnum) {
//   switch (operator) {
//     case "+":
//       return Number(firstnum) + Number(secondnum);  
//       case "-":
//         return Number(firstnum) - Number(secondnum);
//         case "*":
//       return Number(firstnum) * Number(secondnum);      
//     default:
//       return Number(firstnum) / Number(secondnum);  
//   }
// if (operator === "+"){
//   return Number(firstnum) + Number(secondnum)
// }
// else if (operator === "-"){
//   return Number(firstnum) - Number(secondnum)
// }
// else if (operator === "*"){
//   return Number(firstnum) * Number(secondnum)
// }
// else{
//   return Number(firstnum) / Number(secondnum)
// }
// }

























// const btns = document.querySelectorAll('button');
// const result = document.querySelector("#result");

// for (let i = 0; i < btns.length; i++) {
// btns[i].addEventListener("click",(e)=>{
//   if (e.target.innerText === "C"){
//     result.innerText = result.innerText.slice(0,result.innerText.length-1);
//   }
//   else if(e.target.innerText === "AC"){
//     result.innerText = "";
//   }
//   else if(e.target.innerText !== "="){
//     result.innerText =result.innerText + e.target.innerText
//   }
//   else{
//     const splitValues = result.innerText.split('');
//     result.innerText = calculation(splitValues[0],splitValues[1],splitValues[2])
//   }
// })  
// }
// function calculation(firstnum,operator,secondnum) {
//   switch (operator) {
//     case "+":
//       return Number(firstnum)  + Number(secondnum); 
//       case "-":
//       return Number(firstnum)  - Number(secondnum); 
//       case "*":
//       return Number(firstnum)  * Number(secondnum); 
//     default:
//       return Number(firstnum)  / Number(secondnum); 
//   }
// }







// const btns = document.querySelectorAll("button");
// const result = document.querySelector("#result");
// for (let i = 0; i < btns.length; i++) {
// btns[i].addEventListener("click",function(e){
//   if (e.target.innerText === "C") {
//     result.innerText = result.innerText.slice(0,result.innerText.length-1)
//   }
//   else if(e.target.innerText === "AC"){
//     result.innerText = " "
//     // result.innerText.slice(0,0)
//   }
//   else if(e.target.innerText !== "="){
// result.innerText = result.innerText + e.target.innerText
//   }
//   else{
//     const splitValues = result.innerText.split("")
//     // console.log(splitValues);
//     result.innerText = calculation(splitValues[0],splitValues[1],splitValues[2]);
//   }
// })
// }

// function calculation(firstNum,operator,secondNum) {
  // switch (operator) {
  //   case "+":
  //     return Number(firstNum) + Number(secondNum);
  //     case "-":
  //       return Number(firstNum) - Number(secondNum);
  //       case "*":
  //     return Number(firstNum) * Number(secondNum);
  //   default:
  //       return Number(firstNum) / Number(secondNum);
//   // }
//   if (operator === "+") {
//     return Number(firstNum) + Number(secondNum);
//   }
//   else if (operator === "-") {
//     return Number(firstNum) - Number(secondNum);
//   }
//   else if (operator === "*") {
//     return Number(firstNum) * Number(secondNum);
//   }
//   else{
//     return Number(firstNum) * Number(secondNum);
//   }
// }


const btns = document.querySelectorAll("button");
const result = document.querySelector("#result")

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click",(e)=>{
if (e.target.innerText === "C") {
  result.innerText = result.innerText.slice(0,result.innerText.length-1)
}
else if(e.target.innerText === "AC"){
result.innerText = result.innerText.slice(0,0)
}
else if(e.target.innerText !== "="){
  result.innerText = result.innerText + e.target.innerText
}
else{
  const  split = result.innerText.split('')
  result.innerText = calculateresult(split[0],split[1],split[2])
}
  })  
}

function calculateresult(firstNum,operator,secondNum) {
  switch (operator) {
    case "+":
      return Number(firstNum) + Number(secondNum);
      case "-":
      return Number(firstNum) - Number(secondNum);
      case "*":
      return Number(firstNum) * Number(secondNum); 
      case "/":
      return Number(firstNum) / Number(secondNum) 
    default:
      return "Invalid input"
  }
}
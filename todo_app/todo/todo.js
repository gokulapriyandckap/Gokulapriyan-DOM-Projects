// let form = document.getElementById("addForm");
// console.log(form);
// let itemList = document.getElementById("items");
// let filter = document.getElementById("filter");
// let input =  document.getElementById("item")

// //form submit event
// form.addEventListener("submit", addItem);
// //delete event
// itemList.addEventListener("click", removeItem);
// //filter event
// filter.addEventListener("keyup", filterItems);

// //Add item
// function addItem(e) {
//   e.preventDefault();

//   //Get input value
//   let newItem = input.value;
//   //Create new li element
//   let li = document.createElement("li");
//   //add Class
//   li.className = "list-group-item";
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));
  

//   //crate delete button element
//   let deleteButton = document.createElement("button");
//   // add classes to delete button
//   deleteButton.className = "btn btn-danger btn-sm float-right delete";
//   // append text node
//   deleteButton.appendChild(document.createTextNode("X"));
//   //append button to li
//   li.appendChild(deleteButton);
//   //append li to list
//   itemList.appendChild(li);
//   //clear input field
//   input.value = ""
// }

// //Remove item
// function removeItem(e) {
//   if (e.target.classList.contains("delete")) {
//     if (confirm("Are you sure?")) {
//       let li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// //filter Event
// function filterItems(e) {
//   //convert to lowercase
//   let text = e.target.value.toLowerCase();
//   //get allListItems
//   let items = itemList.getElementsByTagName("li");
//   //convert to an array
//   Array.from(items).forEach(item => {
//     let itemName = item.firstChild.textContent;
//     if (itemName.toLowerCase().indexOf(text) != -1) {
//       //if the value matches list items add display as block
//       item.style.display = "block";
//     } else {
//       //if it doesnt match add display as none
//       item.style.display = "none";
//     }
//   });
// }


// let form = document.getElementById("addForm");
// // console.log(form);
// let itemList = document.getElementById("items");
// let filter = document.getElementById("filter");
// let input = document.getElementById("item");



// form.addEventListener("submit",additem);
// itemList.addEventListener("click", removeItem)
// filter.addEventListener("keyup",filteritems);



// function additem(e){
//   e.preventDefault();


//   let newitem = input.value;

//   let li = document.createElement("li")



// li.innerHTML = newitem


// li.className = "list-group-item"

// let deleteButton = document.createElement("button");

// deleteButton.className = "btn btn-danger btn-sm float-right delete";

// deleteButton.innerText = "X"
 
// li.appendChild(deleteButton)

// itemList.append(li)

// input.value =''
// }

// function removeItem(e) {
//   if (e.target.classList.contains("delete")) {
//     if (confirm("Are you sure?")) {
//       let li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }


// function filteritems(e) {
//   let text = e.target.value.toLowerCase();
//   let li = document.querySelectorAll("li");
//   let array = Array.from(li)
//   console.log(array);

//   for (let i = 0; i < array.length; i++) {
//     if (array[i].innerText.toLowerCase().indexOf(text) !=-1) {
//    array[i].style.display = "block"   
//     }
//     else{
//       array[i].style.display = "none"
//     }
    
//   }
// }


// let form = document.getElementById("addForm");
// let filter = document.getElementById("filter");
// console.log(filter);
// let input = document.getElementById("item");
// let ul = document.getElementById("items");


// form.addEventListener("submit",additems);
// ul.addEventListener("click",removeitem);
// filter.addEventListener("keyup",filteritems);

// function additems(e) {
//   e.preventDefault();

//   let li = document.createElement("li");
//   li.innerText = input.value;

//   li.className = "list-group-item";


//   let deleteButton = document.createElement("button");

//   deleteButton.className = "btn btn-danger btn-sm float-right delete";

//   deleteButton.innerText = "X"

// li.appendChild(deleteButton);

// ul.append(li);

// input.value =""
// }


// function removeitem(e) {
// if (e.target.classList.contains("delete")){
//   if (confirm("Are You Sure To Delete the Item?")) {
//     let li = e.target.parentElement
//     ul.removeChild(li)
//   }
// }
// }

// function filteritems(e) {
//   let text = e.target.value.toLowerCase();
//   let litems = document.querySelectorAll("li");
//   let array = Array.from(litems)
//   console.log(array);


//   for (let i = 0; i < array.length; i++) {
//     console.log(i);
//    if (array[i].innerText.toLowerCase().indexOf(text)!=-1) {
//     array[i].style.display = "block";
//    }   
//    else{
//     array[i].style.display = "none";
//    }
//   }
// }


// let form = document.getElementById("addForm");
// let input = document.getElementById("item");
// let filter = document.getElementById("filter");
// let ul = document.getElementById("items")


// form.addEventListener("submit",additems);
// ul.addEventListener("click",removeitems);
// filter.addEventListener("keyup",filteritems);



// function additems(e) {
//   e.preventDefault();
  
//   let li = document.createElement("li");
//   li.className = "list-group-item";
//   li.innerText = input.value;

//  let deletebtn = document.createElement("button")
//  deletebtn.className = "btn btn-danger btn-sm float-right delete"
//  deletebtn.innerText = "X";
 
//  li.appendChild(deletebtn);
//  ul.append(li);
//  input.value = ""   
// }


// function removeitems(e){
//   if (e.target.classList.contains("delete")){
//     if (confirm("Are you sure?")){
//       let list = e.target.parentElement
//       ul.removeChild(list)       
//     }    
//   }  
// }


// function filteritems(e){
//   let text = e.target.value.toLowerCase()
//   let items = document.querySelectorAll("li");
//   let array = Array.from(items)
//   for (let i = 0; i < array.length; i++) {
//    if (array[i].innerText.toLowerCase().indexOf(text) !=-1) {
// array[i].style.display= "block"    
//    }
//    else{
//     array[i].style.display = "none"
//    }
//   }  
// }
























let form = document.getElementById("addForm");
let input = document.getElementById("item");
let ul = document.getElementById("ul-list");
let filter = document.getElementById("filter")
console.log(input);


form.addEventListener("submit",additems);
ul.addEventListener("click",removeitems);
filter.addEventListener("keyup",filteritems);


function additems(e){
  e.preventDefault()  

  let li = document.createElement("li");
  li.innerText = input.value;
  li.className = "list-group-item";



  const deletebtn = document.createElement("button");
  deletebtn.className = ("btn btn-danger btn-sm float-right delete")
  deletebtn.innerText = "X";

  li.appendChild(deletebtn);

  ul.append(li);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // addbtn.addEventListener("click",(e)=>{
//     e.preventDefault()
//     if (textinput.value !== "" && numberinput.value !=="") {
//         const li = document.createElement("li");
//     li.innerText = textinput.value +numberinput.value;
//     const deletebtn = document.createElement("button");
//     deletebtn.innerText = "X"
//     li.appendChild(deletebtn);
//     ul.appendChild(li);
//  Mainbalance.innerText = Number(Mainbalance.innerText) + Number(numberinput.value);
//  if (numberinput.value >0) {

//   li.style.backgroundColor ="green"
//   li.style.color ="white"
//     income.innerText = Number(income.innerText) + Number(numberinput.value)
//  }
//  else{
//     li.style.backgroundColor ="red";
//   li.style.color ="white" ;
//   rent.innerText = Number(rent.innerText) + Number(numberinput.value)
//  }    
//     deletebtn.addEventListener("click",(e)=>{
//         const li = e.target.parentElement
//         ul.removeChild(li)
//         deletebtn.style.backgroundColor ="red";
//         deletebtn.style.color = "white;"
//         let listitems = document.querySelectorAll('li')
//         let ptag = document.createElement("p");
//     })
//     textinput.value =""
//     numberinput.value=""
//     }
//     else{
//         alert("Empty Values Cannot be Added")
//     }
// })


  input.value = ""
}


function removeitems(e){
  if (e.target.classList.contains("delete")){
    if (confirm("are you sure ?")){
      let li = e.target.parentElement
      ul.removeChild(li)
    }
  }
}


function filteritems(e){
  let text = e.target.value.toLowerCase();
  let lists = document.querySelectorAll("li");
  const array = Array.from(lists)

  for (let i = 0; i < array.length; i++) {
    if (array[i].innerText.toLowerCase().indexOf(text) != -1) {
      array[i].style.display = 'block'
    }
    else{
      array[i].style.display = "none"
    }
    
  }
}

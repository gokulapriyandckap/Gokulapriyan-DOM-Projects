// ****** select items **********

// const form = document.querySelector(".grocery-form");
// const alert = document.querySelector(".alert");
// const grocery = document.getElementById("grocery");
// const submitBtn = document.querySelector(".submit-btn");
// const container = document.querySelector(".grocery-container");
// const list = document.querySelector(".grocery-list");
// const clearBtn = document.querySelector(".clear-btn");



// window.addEventListener("DOMContentLoaded", function () {
//   clearBtn.style.display = "none";
// });

// edit option
// let editElement;
// let editFlag = false;
// let editID = "";
// ****** event listeners **********

// submit form
// form.addEventListener("submit", addItem);
// clear list
// clearBtn.addEventListener("click", clearItems);

// ****** functions **********

// add item
// function addItem(e) {
//   e.preventDefault();
//   const value = grocery.value;
//   const id = new Date().getTime().toString();

  //check to see if we are in edit mode or create mode
  // if (value !== "" && !editFlag) {
  //   const element = document.createElement("article");
  //   element.setAttribute("data-id",id);
  //   element.classList.add("grocery-item");
  //   element.innerHTML = `<p class="title">${value}</p>
  //           <div class="btn-container">
  //             <!-- edit btn -->
  //             <button type="button" class="edit-btn">
  //               <i class="fas fa-edit"></i>
  //             </button>
  //             <!-- delete btn -->
  //             <button type="button" class="delete-btn">
  //               <i class="fas fa-trash"></i>
  //             </button>
  //           </div>
  //         `;
    // add event listeners to both buttons;
    // const deleteBtn = element.querySelector(".delete-btn");
    // deleteBtn.addEventListener("click", deleteItem);
    // const editBtn = element.querySelector(".edit-btn");
    // editBtn.addEventListener("click", editItem);

    // append child
    // list.appendChild(element);
    // display alert
    // displayAlert("item added to the list", "success");
    // set back to default
    // setBackToDefault();


  // } else if (value !== "" && editFlag) {
  //   editElement.innerHTML = value;
  //   displayAlert("value changed", "success");
  //   setBackToDefault();
  // } else {
  //   displayAlert("please enter value", "danger");
  // }

  // console.log(document.getElementsByTagName("article"));

  //for showing clear items button
//   if (document.getElementsByTagName("article").length > 0) {
//     clearBtn.style.display = "block";
//   }
// }
// display alert
// function displayAlert(text, action) {
//   alert.textContent = text;
//   alert.classList.add(`alert-${action}`);
//   // remove alert
//   setTimeout(function () {
//     alert.textContent = "";
//     alert.classList.remove(`alert-${action}`);
//   }, 1000);
// }

// clear items
// function clearItems() {
//   const items = document.querySelectorAll(".grocery-item");
//   if (items.length > 0) {
//     items.forEach(function (item) {
//       list.removeChild(item);
//     });
//   }
//   displayAlert("empty list", "danger");
//   setBackToDefault();
//   clearBtn.style.display = "none"
// }

// delete item

// function deleteItem(e) {
//   const element = e.currentTarget.parentElement.parentElement;
//   list.removeChild(element);
//   displayAlert("item removed", "danger");
//   setBackToDefault();
// }
// edit item
// function editItem(e) {
  // const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  // editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  // grocery.value = editElement.innerHTML;
  // editFlag = true;
  // editID = element.dataset.id;
  //
//   submitBtn.textContent = "edit";
// }
// set back to defaults
// function setBackToDefault() {
//   grocery.value = "";
//   editFlag = false;
//   editID = "";
//   submitBtn.textContent = "submit";
// }

















// const submit = document.querySelector("#submit");
// const main_container = document.querySelector(".grocery-container");
// const clbtn = document.querySelector(".clear-btn");
// const input = document.querySelector("input");
// const ul = document.querySelector("#main-ul");
// const ptag = document.querySelector(".alert");

// submit.addEventListener("click",(e)=>{
//   e.preventDefault()
//   if (input.value !== "") {
//     main_container.classList.add("show")
//     const li = document.createElement('li');
//     li.innerText = input.value
//     ul.appendChild(li);
//     const deleteBtn = document.createElement('button');
//   deleteBtn.innerText = "X";
//   li.appendChild(deleteBtn);

//   display("Item added");
//   // ptag.innerText = "item added"
//   // setTimeout(() => {
//   //   ptag.innerText = ""
//   // }, 1000);

//   deleteBtn.addEventListener("click",function (e) {
//     e.target.parentElement.remove();
//     // ptag.innerText = "item removed"
//     // setTimeout(() => {
//     //   ptag.innerText = ""
//     // }, 1000);
//     display("Item Removed");
  

//   })
// input.value =""
//   }
// });
// clbtn.addEventListener("click",function(){
//   ul.remove();
//   main_container.classList.remove("show")

//   display("List Cleared");
//   // ptag.innerText= "list cleared"
//   // setTimeout(() => {
//   //   ptag.innerText=""
//   // }, 1000);
// });

// function display(text){
//   ptag.innerText = text
//   window.setTimeout(()=>{
//       ptag.innerText = " "
//   },500)
// }







// const input = document.querySelector("input")
// const submit = document.querySelector("#submit");
// const main_container = document.querySelector(".grocery-container");
// const ul = document.querySelector("#main-ul");
// const clallbtn = document.querySelector(".clear-btn");
// const ptag = document.querySelector("p");
// console.log(submit);


// submit.addEventListener("click",(e)=>{
//   e.preventDefault();
//   if (input.value !== "") {
//     main_container.classList.add("add")
//     let li = document.createElement("li");
//     li.innerText = input.value;
//     ul.appendChild(li)
//     display("item added")
  


//     let deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "X"
//     li.appendChild(deleteBtn);
  
  
  
  
  
//   deleteBtn.addEventListener("click",(e)=>{
//     e.target.parentElement.remove()
//     display("item removed")
//   })

//   input.value=''
//   }

// })

// clallbtn.addEventListener("click",(e)=>{
// ul.remove()
// main_container.classList.remove("add")
// display("list cleared")
// })


// function display(text){
//   ptag.innerText = text
//   window.setTimeout(()=>{
//     ptag.innerText = ""
//   },1000) 
// }


const input = document.querySelector("input");
const  ul =  document.querySelector("#main-ul");
const submit = document.querySelector("#submit");
const container = document.querySelector(".grocery-container");
const ptag = document.querySelector("p");
const clbtn = document.querySelector(".clear-btn");


submit.addEventListener("click",(e)=>{
  e.preventDefault();
  if (input.value!== "") {
    container.classList.add("show");
    const li = document.createElement("li");
    li.innerText = input.value;

    const deletebtn = document.createElement("button");
    deletebtn.innerText ="X"
    li.appendChild(deletebtn)

    ul.appendChild(li);
    display("Item Added")



    deletebtn.addEventListener('click',(e)=>{
      e.target.parentElement.remove()
      display("Item Removed")
      if (ul.length >=1){
        container.classList.remove("show")
      }
    })
    input.value= ""
  }
else {
  display("empty values cannot be added")
}
})


clbtn.addEventListener("click",(e)=>{
  container.classList.remove("show")
  ul.remove()
  container.classList.remove("show")
  display("List cleared")
})


function display(text) {
  ptag.innerText = text;
 window.setTimeout(() => {
    ptag.innerText =""
  }, 1000);
}
























// const input = document.querySelector("input");
// const submit = document.querySelector("#submit");
// const main_container = document.querySelector(".grocery-container");
// const ul = document.querySelector("#main-ul");
// const ptag = document.querySelector("p");
// const clearBtn = document.querySelector(".clear-btn");

// submit.addEventListener("click",(e)=>{
//   e.preventDefault();
//   if (input.value !== "") {
//     main_container.classList.add("show");
//     const li = document.createElement("li")
//     li.innerText= input.value;
//     ul.appendChild(li);
//     display("item added")

  
//     deletebtn = document.createElement('button')
//     deletebtn.innerText ="X"
//     li.appendChild(deletebtn);




//     deletebtn.addEventListener("click",(e)=>{
//   let main_container = document.querySelector(".grocery-container");

//       let lists = document.querySelectorAll("li")
//       if(lists.length <= 1){
//         main_container.classList.remove("show")

//       }
//       e.target.parentElement.remove()
//       display("item removed")

//     })
//     input.value =""
//   }
//   else{
//     display("empty value cannot be added")
//   }
  
// })



// clearBtn.addEventListener("click",()=>{

//   ul.remove();
//   main_container.classList.remove("show")
//   display("list cleared")
  
// })


// function display(text) {
//   ptag.innerText = text;
//   window.setTimeout(()=>{
//     ptag.innerText = ''
//   },1000)
// }








// EXAMINE THE DOCUMENT OBJECT //




// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[1]);
// document.all[10].textContent = 'Hello';
//console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
//  headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// // GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'item 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'red';
// items[1].style.color = 'white';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   if(i %2 !=0){
//   items[i].style.backgroundColor = 'red';
//   items[i].style.color = " white";
//   items[i].style.fontWeight = "bold";
// }
//}

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 100px red';
// console.log(header);

// var input = document.querySelector('input');
// input.value = 'Hello World'
// console.log(input);

// var submit = document.querySelector('input[type="submit"]');

// submit.addEventListener('mouseover',function(){
//   submit.value="Submitted"
// submit.style.backgroundColor = 'red';
// })

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(3)');
// secondItem.style.color = 'red';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[1].textContent = 'Hlo';
// titles[1].style.color = 'red';
// for(let i = 0;i<titles.length;i++){
//   titles[i].textContent = 'Hlo';
// titles[i].style.color = 'blue';
// }

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = 'red';
//   even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM //
// var itemList = document.querySelector("#items");
// console.log(itemList)
// // parentNode
//  console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = 'red';
//  //console.log(itemList.parentNode.parentNode.parentNode);
//  itemList.parentNode.parentNode.parentNode.style.backgroundColor = 'red';

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
//  console.log(itemList.firstChild);
// // firstElementChild
//  console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild
// console.log(itemList.lastChild);
// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// console.log(itemList.previousElementSibling.style.color = 'green');

// createElement

// // Create a div
// var newDiv =  document.createElement('div');
// console.log(newDiv)

// // Add class
// newDiv.className= 'hello';

// // // Add id
// newDiv.id = 'hello1';

// // // Add attr
//  newDiv.setAttribute('title', 'Hello Div');

// // Create text node
//var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

//  var container = document.querySelector('header .container');
//  var h1 = document.querySelector('header h1');
// console.log(container);
// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv,h1);

// EVENTS //

// var button = document
// console.log(button)
//  let go = button.querySelector("button")
// //  console.log(go);
//   go.addEventListener("mouseover", buttonClick);

// function buttonClick(e) {
// // console.log("Button clicked");
// document.getElementById("header-title").textContent = "Changed";
// document.querySelector("#main").style.backgroundColor = "#f4f4f4";
// console.log(e);

// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.getElementById("output");
// console.log(output);
// output.innerHTML = "<h3>" + e.target.id + "</h3>";

// console.log(e.type);

// console.log(e.clientX);
// console.log(e.clientY);

// console.log(e.offsetX);
//  console.log(e.offsetY);

// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }

// var button = document.querySelector("button");

// var box = document.getElementById("box");
// console.log(box);

//  button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// button.addEventListener("mouseenter", runEvent);
// button.addEventListener("mouseleave", runEvent);

// button.addEventListener("mouseover", runEvent);
// button.addEventListener("mouseout", runEvent);

// button.addEventListener("mousemove", runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// console.log(itemInput)
// var form = document.querySelector("form");
// var select = document.querySelector("select");


// itemInput.addEventListener("keydown", function(e){
//   console.log(e)
// });
// itemInput.addEventListener("keyup", function(e){
//   console.log(e.target)
// });
// itemInput.addEventListener("keypress", runEvent);

// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);

// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);

// itemInput.addEventListener("input", runEvent);

// select.addEventListener("change", runEvent);
// select.addEventListener("input", runEvent);

// form.addEventListener("submit", runEvent);

// function runEvent(e) {
//   e.preventDefault();
//   console.log("EVENT TYPE: " + e.type);

//   console.log(e.target.value);
//   document.getElementById("output").innerHTML =
//     "<h3>" + e.target.value + "</h3>";

// //   output.innerHTML =
// //     "<h3>MouseX: " + e.offsetX + " </h3><h3>MouseY: " + e.offsetY + "</h3>";

// //   document.body.style.backgroundColor =
// //     "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";
// }


// const name = "hi" + "hello"
// console.log(name);
// let name = 'gokul';
//  name = 'avinash';
//  console.log(name);




let name ;
console.log(name);
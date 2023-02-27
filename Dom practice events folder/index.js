// console.dir(document);
// console.log(document.firstChild);
// console.log(document.URL);
// console.log(document.title);
// document.title = "demo";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[8]);
// // document.all[8].textContent = "gokul";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GETELEMETBYID//
// const headtitile = (document.getElementById('header-title'))
// const header = (document.getElementById('main-header'))
// console.log(headtitile.textContent);
// headtitile.textContent = " I this is gokul";
// headtitile.innerText = " Bye";
// console.log(headtitile.innerText);
// header.style.borderBottom ="5px solid orange"

//GETELEMENTBYCLASSNAME//

// const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].innerText = "gokul";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = 'Blue';
// items[1].style.color = "white";

// //When we put like this we got error
// // items.style.backgroundcolor = 'red';



// for(let i = 0; i<items.length ;i++){
//     items[i].style.backgroundColor= "red"
//     items[i].style.opacity = "80%"
// }


//GETELEMENTBYTAGNAME//

// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].innerText = "gokul";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = 'Blue';
// li[1].style.color = "white";

// //When we put like this we got error
// // li.style.backgroundcolor = 'red';



// for(let i = 0; i<li.length ;i++){
//     li[i].style.backgroundColor= "red"
//     li[i].style.opacity = "80%"
//     li[i].style.color ="white";
// }


//QUERYSELECTOR//
// const header = document.querySelector('#main-header');
// header.style.borderBottom= '2px solid black'; 


// const input = document.querySelector('input');
// input.value = 'Hi Gokul';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'submitted';


// const item = document.querySelector('.list-group-item');
// item.style.color = "red";


// const lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = "blue";

// const seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color = "yellow";


//QUERYSELECTORALL//


// const titles = document.querySelectorAll('.title')
// console.log(titles)
// titles[0].innerText = "Hellooo ";


// const odd = document.querySelectorAll('li:nth-child(odd)')
// const even = document.querySelectorAll('li:nth-child(even)')


// for(let i = 0 ;i<odd.length;i++){
//     odd[i].style.backgroundColor = "red";
//     even[i].style.backgroundColor = "blue";
    
// }



//TRAVERSING THE DOM//
// const itemslist = document.querySelector("#items")


//PARENTNode
// console.log(itemslist)
// console.log(itemslist.parentNode)
// itemslist.parentNode.style.backgroundColor = "grey"
// itemslist.parentNode.style.opacity = "90%"
// console.log(itemslist.parentNode.parentNode.parentNode.parentNode.parentNode) 


//ParentElement
// console.log(itemslist.parentElement)
// itemslist.parentElement.style.backgroundColor = "grey"
// itemslist.parentElement.style.opacity = "90%"
// console.log(itemslist.parentElement.parentElement) 


//ChildNodes
// console.log(itemslist.childNodes)

// console.log(itemslist.children);
// console.log(itemslist.children[1]);
// itemslist.children[1].style.backgroundColor = 'yellow';


//FIRSTCHILD
// console.log(itemslist.firstChild)
//FIRSTELEMENTCHILD
// console.log(itemslist.firstElementChild)
// itemslist.firstElementChild.textContent = "google";


// LASTCHILD
// console.log(itemslist.lastChild)
// LASTELEMENTCHILD
// console.log(itemslist.lastElementChild)
// itemslist.lastElementChild.textContent = "google";

//NextSibling
// console.log(itemslist.nextSibling)

//NEXTElementSibling
// console.log(itemslist.nextElementSibling)

//PreviousSibling
// console.log(itemslist.previousSibling)

//PreviousElementSibling
// console.log(itemslist.previousElementSibling)
// itemslist.previousElementSibling.innerHTML = "gokul"
// itemslist.previousElementSibling.style.color = "green"

// Create a Element

//Create a Div
//  const newDiv = document.createElement("div")
 

 //Add class
//  newDiv.className = 'hlo'

//Add Id
//  newDiv.id = 'hlo1'

//Add Attribute
//  newDiv.setAttribute('title','hlo div')

 //create a textnode

//  const newdivtxt= document.createTextNode('Hello world');


 //Add txt to div 
//  newDiv.appendChild(newdivtxt);

// const container = document.querySelector('header .container');
// const h1 = document.querySelector('header h1');
// const parent = document.querySelector("#sub-parent");


// console.log(container)
// console.log(h1)
// console.log(newDiv)

//  console.log(newDiv);

//  newDiv.style.fontSize = '30px'

//  newDiv.style.fontWeight = 'bold'


// parent.insertBefore(newDiv,h1);

// parent.style.fontWeight = 'bold';





// const button =document.getElementById("button").addEventListener("click",buttonclick);


// function buttonclick(e){
//     console.log(alert(1))
// document.getElementById('header-title').textContent = 'Button is clicked';
// document.querySelector('#main').style.backgroundColor = "red";
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);;
// const output = document.getElementById('output');
// output.innerHTML = '<h3>'+e.target.id+'</h3>';

// console.log(e.type);
// console.log(e.clientX);
// console.log(e.clientY);

// console.log(e.offsetX);
// console.log(e.offsetY);

// console.log(e.altKey)
// console.log(e.shiftKey)
// console.log(e.ctrlKey)
// }

// const button =document.getElementById("button")

// const box =document.getElementById("box")

// // button.addEventListener("click",runevent);
// // button.addEventListener("dblclick",runevent);
// button.addEventListener("mousedown",runevent);
// // button.addEventListener("mouseup",runevent);


// box.addEventListener('mouseenter',runevent);
// box.addEventListener('mouseleave',runevent);


// box.addEventListener('mouseover',runevent);
// box.addEventListener('mouseout',runevent);
// const output = document.getElementById('output')

// box.addEventListener('mousemove',runevent);


const iteminput = document.querySelector('input[type ="text"]');
const  from = document.querySelector("form");
const select = document.querySelector('select')

// iteminput.addEventListener('keydown', runevent);
// iteminput.addEventListener('keyup', runevent);
// iteminput.addEventListener('keypress', runevent);

// iteminput.addEventListener('focus', runevent);
// iteminput.addEventListener('blur', runevent);

// iteminput.addEventListener('input', runevent);



// iteminput.addEventListener('cut', runevent);
// iteminput.addEventListener('paste', runevent);


// select.addEventListener('change', runevent);
// select.addEventListener('input', runevent);

from.addEventListener('submit', runevent);


function runevent(e){
    e.preventDefault();
console.log('EVENT TYPE :'+e.type);
// console.log(e.target.value);
// document.getElementById('output').innerHTML = '<h3>'+e.target.value+"</h3>"


// output.innerHTML = '<h3>Mousex: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';
// document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";

}

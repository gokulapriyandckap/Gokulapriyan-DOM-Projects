

// What is DOM?
// In simple terms, manipulating, styling and changing the structure of content (HTML)


const ul = document.querySelector("#myList")
// QuerySelector is used to target the element node(only one) which matches the tagname, id or class 


const liUsingQuerySelector = document.querySelector(".second_class")
console.log(liUsingQuerySelector.innerText,"liUsingQuerySelector")
// innerText is the way to access the content inside the tags 


const liUsingQuerySelectorAll = document.querySelectorAll("li")
//  QuerySelector is used to target all the element nodes which matches the tagname, id and class 



const fourthLi = document.createElement("li")
fourthLi.innerText = "Company"

// To create a element node, use createlement method and pass the element name you want to create in the parameter

fourthLi.style.listStyle = "none"
fourthLi.style.color = "green"

ul.append(fourthLi)

// only creating the element, wont be enough you need to apppend or add in the exisisting tree

let toBeAdded = ["a","b","c","d"]
for(let i=0; i<toBeAdded.length; i++){
    let addElement = document.createElement("li")
    addElement.innerText = toBeAdded[i]
    addElement.style.listStyle = "none"
    addElement.style.color = "green"
    ul.append(addElement)
}

// creating multiple elements
// for styling you can use .style with css property


console.log(liUsingQuerySelectorAll)
for(let i=0; i < liUsingQuerySelectorAll.length; i++){
    // if(liUsingQuerySelectorAll[i].innerText.toLowerCase() == "contact"){
        liUsingQuerySelectorAll[i].style.listStyle = "none"
        liUsingQuerySelectorAll[i].style.color = "green"
        
    // }
    // console.log(liUsingQuerySelectorAll[i].innerText,"liUsingQuerySelectorAll")
}


// modifying attributes
const secondLi = document.querySelectorAll(".items")[1]
secondLi.setAttribute("class","second_id")
console.log(secondLi)
// setAttribute sets the property you want to set in the respective element


const firstLi = document.querySelectorAll(".items")[0]
firstLi.removeAttribute("id")
console.log(firstLi)
// removeAttribute removes the property you want to remove in the respective element


const oneLi = document.querySelectorAll(".items")[0]
console.log(oneLi.getAttribute("class"))
// getAttribute gets the property you want to get in the respective element



const secLi = document.querySelectorAll(".items")[0]
secLi.classList.add("active")
secLi.classList.add("selected")   
secLi.classList.remove("selected")
secLi.classList.remove("items")
secLi.removeAttribute("class")
// .classList has many methods like add ,remove, toggle to modify the classes of the targeted element



// secondLi.setAttribute("class","selected")


// console.log(secondLi)


//task

//targeting li

// const allLi = document.querySelectorAll("li")

// console.log(allLi)

//loop

// for(let i=0; i< allLi.length; i++){
//     if(allLi[i].classList.contains("selected")){
//         allLi[i].classList.add("items")
//     }
//     else{
//         allLi[i].setAttribute("class","items")
//     }
// }



// for(let i=0; i< allLi.length; i++){
//         allLi[i].classList.add("items")
// }


// parent node traversal

// const ulChilds = document.querySelector("ul").children

// console.log(ulChilds)
// console.log(ul.parentElement.parentElement.parentElement.parentElement);
// console.log(ul.parentNode.parentNode.parentNode.parentNode);

// console.log(ul.childNodes)
// console.log(ul.children)
// let a = 50
// a = 40
// for(let i=0; i< ulChilds.length; i++){
//     ulChilds[i].innerText = ulChilds[i].innerText.toUpperCase()
//     // console.log(ulChilds[i]);
//     // ulChilds[i].innerText = ulChilds[i].toLowerCase()
// }



// const ul = document.querySelector("#container")

// for elements 
// console.log(ul.previousElementSibling)
// console.log(ul.nextElementSibling)

//for nodes
// ul.previousSibiling
// ul.nextSibiling
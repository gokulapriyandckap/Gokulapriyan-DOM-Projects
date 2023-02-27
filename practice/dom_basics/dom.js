
// console.log("Its working")


// query selection

// const myListById = window.document.getElementById("myList")

// const myListById = document.getElementById("myList")

// const myListByClass = document.getElementsByClassName("myClass")


// const myListUsingQuery = document.querySelector("li")

// const myListUsingQueryAll = document.querySelectorAll("li")

// styling selection

// const h1 = document.querySelector("#my_heading")

// h1.style.color = "red"

// console.log(h1)

// const body = document.querySelector("body")
// let bodyStyle = body.style

// bodyStyle.backgroundColor = "purple"
// bodyStyle.color = "green"
// bodyStyle.backgroundColor = "blue"


// creating an element

// const li = document.createElement("li")

// li.innerText = "more"

// const ul = document.querySelector("ul")

// ul.append(li)


// const div = document.createElement("div")
// const selectedDiv = document.querySelector("#my_div")

// selectedDiv.append(div)

// const selected_ul = document.querySelector("ul")

// console.log(selected_ul.innerText)

// console.log(selected_ul.innerHTML)

// console.log(selected_ul.textContent)

// Modifiying Attributes

// const select_h1 = document.querySelector("h1")

// select_h1.setAttribute("id","my_heading")

// select_h1.removeAttribute("id")

// console.log(select_h1.getAttribute("id"))

//Modifiying class

// const li = document.querySelector("li")

// li.classList.add("my_list")

// console.log(li.classList.contains("second_class"))

// li.classList.remove("my_list")


// console.log(myListUsingQueryAll);

const li = document.querySelectorAll("li")

for(let i=0; i<li.length; i++){
    li[i].classList.add('same_name')
}

// li.classList.add("same_class")
// console.log(li)



// Target the toggle-content


const targetToggleContent = document.querySelector(".toggle-content")
const targetDisplayContent = document.querySelector(".display-content")




// function showContent(){
//     if(targetDisplayContent.classList.contains("show")){
//         // console.log(targetDisplayContent.classList.contains("show"))
//         targetDisplayContent.classList.remove("show")
//         targetDisplayContent.classList.add("hide")
//     }
//     else{
//         targetDisplayContent.classList.remove("hide")
//         targetDisplayContent.classList.add("show")
//     }

// }

function showContent(){
    targetDisplayContent.classList.toggle("hide")
}

// Add Event listener

targetToggleContent.addEventListener("click", showContent)

console.log(targetToggleContent)
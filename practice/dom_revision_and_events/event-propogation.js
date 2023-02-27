window.addEventListener("click", function(){
    console.log("window is clicked")
})

document.addEventListener("click", function(){
    console.log("document  is clicked")
})

document.querySelector(".div-2").addEventListener("click", function(e){
    e.stopPropagation()
    console.log("div2  is clicked")
})
document.querySelector(".div-1").addEventListener("click", function(e){
    
    console.log("div1  is clicked")
})

document.querySelector(".inside-btn").addEventListener("click", function(e){
    console.log("button  is clicked")
})
let para = document.querySelectorAll("article");
let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("click",()=>{
    for (let j = 0; j < para.length; j++) {
       if (para[i] === para[j]) {
        para[j].classList.toggle("show")
       }
       else{
        para[j].classList.remove("show")
       }
        
    }
})    
}


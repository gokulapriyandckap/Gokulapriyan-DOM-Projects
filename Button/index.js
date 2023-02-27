let btns = document.querySelectorAll("button");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("mouseover",()=>{
        if (btns[i].classList.contains("btn1")){
            btns[i].classList.toggle("add1")
        }
        else if (btns[i].classList.contains("btn2")){
            btns[i].classList.toggle("add2")
        }
        else{
            btns[i].classList.toggle("add3")
        }
    })
    
}
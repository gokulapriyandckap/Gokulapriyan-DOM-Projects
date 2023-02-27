// let btns = document.querySelectorAll("button");
// let content = document.querySelectorAll(".content")

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click",(e)=>{
//         const target= e.target.dataset.id
//             //console.log("hi")
//             if (target == content[i].id){
//                 content[i].classList.add("active");
//                 btns[i].classList.add("active");
//             }
//             else{
//                 content[i].classList.remove("active");
//                 btns[i].classList.remove("active")
//             }     
//     })
// }












let btns = document.querySelectorAll("button");
let content = document.querySelectorAll(".content");


for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mouseover",(e)=>{
    let target = e.target.dataset.id;
    for (let i = 0; i < content.length; i++) {
        if (target === content[i].id) {
            content[i].classList.add("active");
            btns[i].classList.add("active")
        }
        else{
            content[i].classList.remove("active");
            btns[i].classList.remove("active")
        }  
    }
  })
}





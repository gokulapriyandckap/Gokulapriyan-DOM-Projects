const button = document.querySelectorAll("button");
// console.log(button)
const dis = document.querySelector('.modal-overlay');
// console.log(dis)


// for(let i = 0 ;i,button.length;i++){
//     button[i].addEventListener('click',function (){
//         if(dis.classList.contains('modal-overlay')){
    
//             dis.classList.remove('modal-overlay')
//             dis.classList.add('show')
//         }
//         else{
//             dis.classList.remove('show')
//             dis.classList.add('modal-overlay')
//         }
//     })
// }

// for(let i = 0;i<button.length; i++){
//    button[i].addEventListener('click',()=>{
//     if(dis.classList.contains('modal-overlay')){
//         dis.classList.toggle('show')
//     }
//    })
// }


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click",()=>{
        if (dis.classList.contains("modal-overlay")) {
            dis.classList.toggle("show")
        }
    })
}

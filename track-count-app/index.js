// let btn = document.querySelectorAll('.btn')
// let span = document.querySelector('.value')


// let result = 0;
 

// for (let i=0; i<btn.length;i++){
//     console.log(i)
// btn[i].addEventListener('click',function(e){
//     if(e.target.classList.contains('increase')){
//         result++
//         span.innerText = result
//     }
//     else if (e.target.classList.contains('decrease')) {
//         result--
//         span.innerText = result
//     }
//      else {
//         result = 0
//         span.innerText = result
//     }
//     if( result == 0){
//         span.style.color = 'black';
//     }
//     else if(result>0){
//         span.style.color = 'green';       
//     }
//     else{
//         span.style.color = 'red';
//     }
// })
// }






let btn = document.querySelectorAll("button");
let span = document.querySelector("span");

let result = 0
for (let i = 0; i < btn.length; i++) {
btn[i].addEventListener("click",function(e){
    if (e.target.classList.contains("increase")) {
        result++
        span.innerText = result
    }
    else if (e.target.classList.contains("decrease")){
        result--
        span.innerText = result
    }
    else{
        result = 0;
        span.innerText = result
    }
    if (result >0) {
        span.style.color = "green";
    }
    else if (result<0){
        span.style.color = "red";
    }
    else{
        span.style.color = "black"
    }
})
} 
























































// increase.addEventListener('click',()=>{
//     result++;
//     span.innerText = result
//     if(result<0){
//         span.style.color = 'green'       
//     }
// });


// decrease.addEventListener('click', function(){
//     result--
//     span.innerText =  result;
//     if(result>0){
//         span.style.color = 'red'; 
//     }
      
// });


// reset.addEventListener('click', buttonclick2);
// function buttonclick2(e){
//     result = 0
//     span.innerText = 0;
//     span.style.color = 'black';
// }




  

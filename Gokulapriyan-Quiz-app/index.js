const Questions = [{
     id : 0,
    ques: "1. Which is the longest river in the world?",
    ans: [{ text1: "nile", isCorrect: true },
        { text2: "ganga", isCorrect: false },
        { text3: "Amazon", isCorrect: false },
        { text4: "cauvery", isCorrect: false }
    ]
},
{
    id: 1,
    ques: "2. Which is india's first super computer?",
    ans: [{ text1: "Para80000", isCorrect: false,},
        { text2: "para800", isCorrect: false },
        { text3: "param80000", isCorrect: false },
        { text4: "Param8000", isCorrect: true }
    ]
},
{
   id : 2,
    ques: "3. What is the capital of Gujarat",
    ans: [{ text1: "surat", isCorrect: false },
        { text2: "vadodara", isCorrect: false },
        { text3: "gandhinagar", isCorrect: true },
        { text4: "rajkot", isCorrect: false }
    ]
},
{
    id : 3,
     ques: "4. Who is the Accounting Manger Of Dckap Explorers",
     ans: [{ text1: "Yuvaraj", isCorrect: false },
         { text2: "Amrish", isCorrect: false },
         { text3: "Vignesh Shankar", isCorrect: true },
         { text4: "Kishore kumar", isCorrect: false }
     ]
 },
 {
    id : 4,
     ques: "5. Who is the Hero Of Dckap Explorers",
     ans: [{ text1: "Yuvaraj", isCorrect: false },
         { text2: "Prakash", isCorrect: true },
         { text3: "Lokesh", isCorrect: false },
         { text4: "Deepak", isCorrect: false }
     ]
 },
 {
    id : 5,
     ques: "6. Who is the Head  Of Network Team",
     ans: [{ text1: "Yuvaraj", isCorrect: false },
         { text2: "Parasu_Arjun_empire", isCorrect: true },
         { text3: "Vignesh Shankar", isCorrect: false },
         { text4: "Prakash", isCorrect: false }
     ]
 },
 {
    id : 6,
     ques: "7. Who is the Content Writer of Dckap Explorers",
     ans: [{ text1: "Yuvaraj", isCorrect: true },
         { text2: "gokul", isCorrect: false },
         { text3: "Srithar", isCorrect: false },
         { text4: "Prakash", isCorrect: false }
     ]
 },
 {
    id : 7,
     ques: "8. Who is the Full-Stack Developer in Dckap Explorers",
     ans: [{ text1: "Yuvaraj", isCorrect: false },
         { text2: "gokul", isCorrect: false },
         { text3: "Lokesh", isCorrect: true },
         { text4: "akash", isCorrect: false }
     ]
 },
 {
    id : 8,
     ques: "9. Who is the Front-end Developer in Dckap Explorers",
     ans: [{ text1: "balamurugan", isCorrect: false },
         { text2: "gokul", isCorrect: false },
         { text3: "Lokesh", isCorrect: false },
         { text4: "jeeva", isCorrect: true }
     ]
 },
 {
    id : 9,
     ques: "10. Who is the SilentKiller in Dckap Explorers",
     ans: [{ text1: "balamurugan", isCorrect: true },
         { text2: "gokul", isCorrect: false },
         { text3: "malligaarjun", isCorrect: false },
         { text4: "jeeva", isCorrect: false }
     ]
 },
 {
    id : 10,
     ques: "11. Who is Designer in Dckap Explorers",
     ans: [{ text1: "Ganesh", isCorrect: false },
         { text2: "gokul", isCorrect: false },
         { text3: "Dhanush", isCorrect: false },
         { text4: "Both 1 and 3", isCorrect: true }
     ]
 }
]
const container = document.querySelector(".container")
const qtns = document.getElementById("questions");
const optdiv = document.querySelector(".options")
const right= document.querySelector("#true");
const wrong= document.querySelector("#false");
const opt1 = document.querySelector("#opt-1");
const opt2 = document.querySelector("#opt-2");
const opt3 = document.querySelector("#opt-3");
const opt4 = document.querySelector("#opt-4");
const nxtbtn = document.querySelector("#nxt-btn");
const options = document.querySelectorAll(".opt");

let i = -1
nxtbtn.addEventListener("click",(e)=>{
    i++
    if(i == Questions.length){
        confirm("you have finished the quiz");
        nxtbtn.style.display ="none";
        qtns.style.display ="none";
        optdiv.style.display ="none";      
        for(let i=0;i<options.length;i++){
            options[i].style.display = "none"
        }
        let h3 = document.createElement("h1")
        h3.innerText = "Quizz Completed"
        container.append(h3)
    }
    else{
        nxtbtn.innerText ="next";
    }
    optdiv.style.display ="block";
    qtns.innerText = Questions[i].ques
    opt1.innerText = Questions[i].ans[0].text1
    opt2.innerText = Questions[i].ans[1].text2
    opt3.innerText = Questions[i].ans[2].text3
    opt4.innerText = Questions[i].ans[3].text4  
    right.classList.remove("show")
   
    for (let j = 0; j < options.length; j++) {
        options[j].addEventListener("click",()=>{
           if (Questions[i].ans[j].isCorrect ) {
            right.classList.add("show")
            right.style.color="green";
           }
           else{
            wrong.classList.add("show")
            wrong.style.color="red "
            right.classList.remove("show")
            
            setTimeout(() => {
                wrong.classList.remove("show")
            },1000);
           }
        })   
    }
});


const btn =document.querySelector("button");


btn.addEventListener("click",calculateDiff)

function calculateDiff(){
    var FromYear = Number(document.getElementById("FromYear").value);
    var FromMonth = parseInt(document.getElementById("FromMonth").value);
    var FromDay = parseInt(document.getElementById("FromDay").value);
  
  
    //current date
    var today = new Date();
    var currentyear = today.getFullYear();
    var currentmonth = today.getMonth()+1;
    var currentday = today.getDay()
    var years, months, days;
  
    //months
    months = currentmonth - FromMonth;
    if(currentday < FromDay) {
      months = months -1;
    }
  
  
    //years
    years = currentyear - FromYear;
    if(currentmonth < FromMonth) {
      years = years - 1;
      months = months + 12;
    }
  
    //days
    days = 31 -FromDay;
  
    //answer order
    var answer = years + " years, " + months + " months, and " + days + " days.";
  
    //post answer
    document.getElementById("result").textContent =  answer;
    return {years: years, months: months, days: days};
  }
  
  
  
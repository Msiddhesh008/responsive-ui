// alert('hello')

var date = new Date()
console.log();

var monthName = ["JAN", "FEB", "MAR", "APRIL", "MAY", "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"]

var setDate = document.querySelectorAll("ul li .date")
console.log(setDate);

setDate.forEach(setDate => {
    setDate.innerHTML = date.getDate()+"<br/>"+monthName[date.getMonth()-1];
    
});



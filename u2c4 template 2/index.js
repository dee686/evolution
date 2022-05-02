// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",formsubmit)
var formarr=JSON.parse(localStorage.getItem("schedule"))|| [];
function formsubmit(){
    event.preventDefault();

    var formobj={
        match:matchNum.value,
        teama:teamA.value,
        teamb:teamB.value,
        day:date.value,
        place:venue.value,

    }
    formarr.push(formobj)
    console.log(formarr)
    localStorage.setItem("schedule",JSON.stringify(formarr))
}
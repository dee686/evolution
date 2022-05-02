// write js code here corresponding to matches.html
var battle=JSON.parse(localStorage.getItem("schedule"));
var favarr=JSON.parse(localStorage.getItem("favourites"))|| [];

displaydata(battle)

function filterdisplay(){
var selected=document.getElementById("filterVenue").value
var list =  battle.filter(function(elem){
        return elem.place==selected
    })
    console.log(list)
    displaydata(list)
}


function displaydata(data){
    document.querySelector("tbody").innerHTML=""
    data.forEach(function(element){
   
        var tr= document.createElement("tr")

        var td1=document.createElement("td")
        td1.innerText=element.match;

        var td2=document.createElement("td");
        td2.innerText=element.teama;

        var td3=document.createElement("td")
        td3.innerText=element.teamb;

        var td4=document.createElement("td");
        td4.innerText=element.day;

        var td5=document.createElement("td")
        td5.innerText=element.place;

        var td6=document.createElement("td");
        td6.innerText="Add as Favourites"
        td6.style.color="green"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            addfav(element)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);
    });

    function addfav(element){
        favarr.push(element)
        localStorage.setItem("favourites",JSON.stringify(favarr))
        console.log(favarr)
    }
}


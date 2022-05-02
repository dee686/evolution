// write js code here corresponding to favourites.html
var filter_data=JSON.parse(localStorage.getItem("favourites"))

displaydata2(filter_data)

function displaydata2(details){

    details.forEach(function(element,index){
       
        var tr=document.createElement("tr")

        var td1=document.createElement("td")
        td1.innerText=element.match
        
        var td2=document.createElement("td")
        td2.innerText=element.teama;

        var td3=document.createElement("td")
        td3.innerText=element.teamb;

        var td4=document.createElement("td")
        td4.innerText=element.day;

        var td5=document.createElement("td")
        td5.innerText=element.place;

        var td6=document.createElement("td")
        td6.innerText="Delete";
        td6.style.color="red";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            deletefunc(element,index)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    });
    function deletefunc(element,index){
        filter_data.splice(index,1)
        localStorage.setItem("favourites",JSON.stringify(filter_data))
      window.location.reload();
    }
}
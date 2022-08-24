
var one=sessionStorage.getItem("fname");
var two=sessionStorage.getItem("lname");
var three=sessionStorage.getItem("age");
var four=sessionStorage.getItem("email");
var five=sessionStorage.getItem("phone");
var six=sessionStorage.getItem("gender");

document.getElementById("firstname").innerHTML=one;
document.getElementById("lastname").innerHTML=two;
document.getElementById("age1").innerHTML=three;
document.getElementById("email1").innerHTML=four;
document.getElementById("phone1").innerHTML=five;
document.getElementById("gender1").innerHTML=six;

var one1=sessionStorage.getItem("fname5");
var two1=sessionStorage.getItem("lname5");
var three1=sessionStorage.getItem("age5");
var four1=sessionStorage.getItem("email5");
var five1=sessionStorage.getItem("phone5");
var six1=sessionStorage.getItem("gender5");

document.getElementById("firstname5").innerHTML=one1;
document.getElementById("lastname5").innerHTML=two1;
document.getElementById("age5").innerHTML=three1;
document.getElementById("email5").innerHTML=four1;
document.getElementById("phone5").innerHTML=five1;
document.getElementById("gender5").innerHTML=six1;

var itm=sessionStorage.getItem("flnum");
let flight_details = fetch("/Json/flights.json");
flight_details.then(response => response.json()).then(data=>{ 
    for(let i = 0; i < data.length; i++)
    {
        var obj=data[i];
        if(obj["flightNum"]==itm)
        {
            document.getElementById("flightnum").innerHTML=obj["flightNum"];
            document.getElementById("origin1").innerHTML=obj["origin"];
            document.getElementById("dest1").innerHTML=obj["destination"];
            const dtime=new Date(obj.departTime);
            document.getElementById("depart1").innerHTML=dtime.toUTCString();
            const atime=new Date(obj.ArrivalTime);
            document.getElementById("arrive1").innerHTML=atime.toUTCString();
            document.getElementById("price1").innerHTML=obj["price"];
            break;
        }
    }
})
var p2p=document.getElementById("form2");
var flag=sessionStorage.getItem("p2p");

if(flag==1){
    p2p.style.display="block"; 
}
else{
    p2p.style.display="none";
}
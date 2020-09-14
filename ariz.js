var min=0;
var sec=0;
var msec=0;
var minHeading=document.getElementById("min"); //getting from html
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var interval;
function timer(){
    msec++ //increament
    msecHeading.innerHTML=msec; //setting to html
    if(msec>=100)
    {
        sec++
        secHeading.innerHTML=sec;
        msec=0;
    }
}
interval=setInterval(timer,10)
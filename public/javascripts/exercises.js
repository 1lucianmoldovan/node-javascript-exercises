/** Exercise #1 */
function displayTime(){
    var newDate = new Date();
    var dayNow = newDate.getDay();
    var weeckDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    $('#dayNow').html(weeckDays[dayNow]);
    
    var hours = newDate.getHours();
    var minutes = newDate.getMinutes();
    var seconds = newDate.getSeconds();
    var prepend = (hours >= 12)? "PM" : "AM";
    hours = (hours >= 12)? hours - 12: hours;
    if(hours === 0 && prepend=== "PM"){
        if(minutes===0 && seconds===0){
            hours = 12;
            prepend = "Noon";
        }else
        { 
        hour=12;
        prepand=' PM';
        };  
    };
    if(hours===0 && prepend==="AM"){
        if(minutes===0 && seconds===0){
            hours = 12;
            prepend = "Midnight";
        }else{
        hour=12;
        prepand=' PM';
        };
    };
    if (hours < 10){
        hours = "0"+hours;
    };
    if (minutes < 10){
        minutes = "0" + minutes;
    };
    if(seconds < 10){
        seconds = "0"+ seconds;
    };
    $('#timeNow').html(hours+" "+prepend+" : "+minutes+" : "+seconds )
    
    /** Exercise #3 */  
    var day = newDate.getDate();
    var month = newDate.getMonth();
    var year = newDate.getFullYear();
    var monts = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug", "Sep.", "Oct.", "Nov.", "Dec."];
    if(day < 10){
        day = "0" +  day;
    }
    $('#dateNow').html(day + "." + monts[month] + year )
    /*console.log("Today is:", weeckDays[b]);
    console.log("Weeck list:", weeckDays);
    console.log("Time: ", hours, ":", minutes, ":", seconds);*/
}

/** Exercise #2 */
function printPage(){
    window.print();
    return false;
}

/** Exercise #4 */

function calculateArea(){
    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value;
    var c = document.getElementById("inputC").value;
    var rez = document.getElementById("resultTri");
    var semiperimeter = (a * 1 + b * 1 + c * 1) / 2;
    var area = Math.sqrt((semiperimeter * 1) * (semiperimeter * 1 - a*1) * (semiperimeter * 1 - b*1) * (semiperimeter*1 - c*1));
    if(area == 0){
        alert("Stupido that's not a triangle!!")
    }
    if(area == false){
        alert("You're realy stupido wright?")
    }
    rez.innerHTML = area;

    console.log("values: ", a, ",", b, ",", c)
    console.log("perimeter: ", semiperimeter )
}

/** Funtion Calls */
/**Exercise #1 */
window.setInterval(function(){
    displayTime();
}, 1000);



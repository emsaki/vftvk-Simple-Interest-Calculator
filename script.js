/* the function to compute Interest */
function compute() 
{
    var principal = document.getElementById("principal");
    var years = document.getElementById("years");
    var rate = document.getElementById("rate");
    
    if(principal.value <=0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }else {     
    var interest = principal.value * years.value * rate.value / 100;
    var d = new Date();  //get the current date
    futureyear = d.getFullYear() + parseInt(years.value); //get the current year and add no. of 
                                                    //years to compute the respective year
                                                    //the customer would receive the Interest.

    //Display the result of computation                                             
    document.getElementById("result").innerHTML = "If you deposit " + principal.value + ",<br/>" +
    " at an interest of " + rate.value + "%.<br/>" +
    "You will receive an amount of " + interest + "<br/>" +
    ", in the year " + futureyear + ".";
    }
    
}

function readslider(){
    var slider = document.getElementById("rate"),
        slidespan = document.getElementById("sliderate");
        slidespan.innerHTML = slider.value + " %";   
}
        
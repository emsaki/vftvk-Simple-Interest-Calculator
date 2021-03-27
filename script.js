/* the function to compute Interest */
function compute() 
{
    var principal = document.getElementById("principal").value;
    if(principal<=0){
        alert("Enter a positive number");
        principal.focus();
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var d = new Date();  //get the current date
    futureyear = d.getFullYear() + parseInt(years); //get the current year and add no. of 
                                                    //years to compute the respective year
                                                    //the customer would receive the Interest.

    //Display the result of computation                                             
    document.getElementById("result").innerHTML = "If you deposit " + principal + ",<br/>" +
    " at an Interest of " + rate + "%.<br/>" +
    "You will receive an amount of " + interest + ",<br/>" +
    ", in the year " + futureyear + ".";
    
}

function readslider(){
    var slider = document.getElementById("rate"),
        slidespan = document.getElementById("sliderate");
        slidespan.innerHTML = slider.value + " %";   
}

        
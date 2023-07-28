/**
*
* script.js 
* @author - Mazeen
* @date - 28/7/2023 
**/
function calculate() {
    var givenWeight = document.getElementById("weight").value;
    var givenHeight = document.getElementById("height").value;

    if (givenWeight === "" && givenHeight === "") {
        document.getElementById("weight-error").innerHTML = "Please enter your weight";
        document.getElementById("height-error").innerHTML = "Please enter your height";
        return;  
    }
    else {
        document.getElementById("weight-error").innerHTML = "";
        document.getElementById("height-error").innerHTML = "";
    }

    if (givenWeight.trim() === "") {
        document.getElementById("weight-error").innerHTML = "Please enter your weight";
        return;
    }
    else {
        document.getElementById("weight-error").innerHTML = "";  
    }
    if (givenHeight.trim() === "") {
        document.getElementById("height-error").innerHTML = "Please enter your height";
        return;
    }
    else {
        document.getElementById("height-error").innerHTML = "";  
    }

    // VALIDATION - START
   // validateForm(givenWeight, givenHeight);
    // VALIDATION - END

    var bmiValue = (Number(givenWeight) / Number(givenHeight) / Number(givenHeight)) * 10000;
    bmiValue = bmiValue.toFixed(2);
    document.getElementById("result").innerHTML = bmiValue;

    if (bmiValue < 18.5) {
        document.getElementById("status").innerHTML = "You are underweight";
    }
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        document.getElementById("status").innerHTML = "You are normal";
    }
    else if (bmiValue >= 25 && bmiValue <= 29.9) {
        document.getElementById("status").innerHTML = "You are overweight";
    }
    else {
        document.getElementById("status").innerHTML = "You are obese";
    }
}


    


function clearForm () {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("status").innerHTML = "";
    document.getElementById("weight-error").innerHTML = "";
    document.getElementById("height-error").innerHTML = "";
}
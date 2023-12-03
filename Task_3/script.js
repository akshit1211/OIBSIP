const degreeValue = document.querySelector(".degree-input");

const convertTempButton = document.querySelector(".convert-temp-button");

const tempOption = document.querySelector(".temp-option");

const convertedTempValue = document.querySelector(".converted-temp-value");

// if(degreeValue.value !== ""){

// }

tempOption.addEventListener("change", test);

convertTempButton.addEventListener("click", test);


function test() {
    if (degreeValue.value == "") {
        convertedTempValue.innerHTML = "Please Fill the value";
        convertedTempValue.style.color = "red";
    }

    if (degreeValue.value != "" && tempOption.value == "Fahrenheit") {
        convertedTempValue.innerHTML = (degreeValue.value - 32) * 5 / 9 + " °C";
        convertedTempValue.style.color = "black";
    }

    if (degreeValue.value != "" && tempOption.value == "Celsius") {
        convertedTempValue.innerHTML = (degreeValue.value * 9 / 5) + 32 + " °F";
        convertedTempValue.style.color = "black";
    }

    // if(degreeValue.value != "" && tempOption.value == "Kelvin"){
    //         convertedTempValue.innerHTML = (degreeValue.value - 273.15) + " K";
    //         convertedTempValue.style.color = "black";       
    // }
}

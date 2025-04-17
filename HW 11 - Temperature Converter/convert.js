window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
    document.getElementById("convertButton").addEventListener("click", () => {
        const celsius = document.getElementById("cInput").value;
        const fahrenheit = document.getElementById("fInput").value;
        const error = document.getElementById("errorMessage");
        const weatherImage = document.getElementById("weatherImage");

        let celsiusTemp;

        if (isNaN(celsius) || isNaN(fahrenheit)) {
            error.innerHTML = (celsius + fahrenheit + " is not a number");
        }
        else if (celsius !== ""){
            document.getElementById("fInput").value = convertCtoF(parseFloat(celsius));
            celsiusTemp = parseFloat(celsius);
        }
        else if (fahrenheit !== "") {
            celsiusTemp = convertFtoC(parseFloat(fahrenheit));
            document.getElementById("cInput").value = celsiusTemp;
        }

        if (celsiusTemp < 32) {
            weatherImage.src = "images/cold.png";
        }
        else if (celsiusTemp >= 32 && celsiusTemp <= 50) {
            weatherImage.src = "images/cool.png";
        }
        else {
            weatherImage.src = "images/warm.png";
        }

    });

    document.getElementById("cInput").addEventListener("input", () => { { /*https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event */}
        document.getElementById("fInput").value = "";
        document.getElementById("errorMessage").innerHTML = "";
    });

    document.getElementById("fInput").addEventListener("input", () => {
        document.getElementById("cInput").value = "";
        document.getElementById("errorMessage").innerHTML = "";
    });

}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
    return degreesCelsius * 9/5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
    return (degreesFahrenheit - 32) * 5/9;
}

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
    document.getElementById("convertButton").addEventListener("click", () => {
        const celsius = document.getElementById("cInput").value;
        const fahrenheit = document.getElementById("fInput").value;

        if (celsius !== ""){
            document.getElementById("fInput").value = convertCtoF(parseFloat(celsius));
        }
        else if (fahrenheit !== "") {
            document.getElementById("cInput").value = convertFtoC(parseFloat(fahrenheit));
        }
    });

    document.getElementById("cInput").addEventListener("input", () => { { /*https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event */}
        document.getElementById("fInput").value = "";
    });

    document.getElementById("fInput").addEventListener("input", () => {
        document.getElementById("cInput").value = "";
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

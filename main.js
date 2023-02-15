function checkTemperature() {
    let temp = Number(document.getElementById("temperature").value);

    if (temp === 0) {
        document.getElementById("output").innerHTML = "Freezing";
    } else if (temp > 0 && temp < 10) {
        document.getElementById("output").innerHTML = "Very Cold Weather";
    } else if (temp >= 10 && temp < 20) {
        document.getElementById("output").innerHTML = "Cold Weather";
    } else if (temp >= 20 && temp < 30) {
        document.getElementById("output").innerHTML = "Normal Temp";
    } else if (temp >= 30 && temp <= 40) {
        document.getElementById("output").innerHTML = "It's Hot";
    } else {
        document.getElementById("output").innerHTML = "Very Hot";
    }
}


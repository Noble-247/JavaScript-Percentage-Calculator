var numFieldX = document.getElementById("valueOfX");
var numFieldY = document.getElementById("valueOfY");
var resultField = document.getElementById("resultField");
var form = document.getElementById("XIsWhatPercentOfY");

form.addEventListener('submit', function(DefaultformEvent) {

    if (!numFieldX.value || !numFieldY.value) {
        alert("Please enter values in all fields")
    } else {
        var x = parseFloat(numFieldX).value;
        var y = parseFloat(numFieldY).value;

        var result = (x / y) * 100;

        resultField.innerText = "Answer: " + result + "%";

        DefaultformEvent.preventDefault();
    }
});
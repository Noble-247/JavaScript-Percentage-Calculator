//INITIALIZE ALL VARIABLES
const form = document.getElementById('XIsWhatPercentOfY');
const valueOfX = document.getElementById('valueOfX');
// TEST 
//valueOfX.value = "40"
const valueOfY = document.getElementById('valueOfY');
//TEST
// valueOfY.value = "30000"
const resultField = document.getElementById('resultField');
//TEST
resultField.innerText = "The Answer will display here!!!";
const errorMessage = document.querySelector(".errorMessage");

form.addEventListener('submit', function(e) {

    if (valueOfX.value === "" || valueOfY.value === "") {
        errorMessage.innerText = "Please Enter All Fields";

    } else {
        const x = valueOfX.value;
        const y = valueOfY.value;

        const result = (x / 100) * y;

        resultField.innerText = `Answer: ${result}`;

        e.preventDefault();
        errorMessage.innerText = "";
        valueOfX.value = "";
        valueOfY.value = "";
    }
})
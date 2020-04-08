document.getElementById("button").addEventListener("click", function(event) {
    // Grabs the values from input fields
    var percentage = document.getElementById("valueOfX").value;
    var wholenumber = document.getElementById("valueOfY").value;
    // selects the result element
    var result = document.getElementById("resultField");
    // Returns the result of the percentage portion amount
    event.preventDefault;
    return (result.textContent = percentage / 100 * wholenumber);

});

/*
const statement = "Covid-19 in town! (50%)";
document.write(" <br> Entering the switch block <br>");

switch (statement) {
    case "Covid-19 in town! (100%)":
        document.writeln("PLEASE EVERYBODY STAY INDOORS (TOTAL LOCKDOWN)!!!!");
        break;

    case "Covid-19 in town! (80%)":
        document("PLEASE ALL EXCEPT PEOPLE RENDERING ESSENTIAL SERVICES STAY AT HOME!! (80% LOCKDOWN)");

    case "Covid-19 in town! (50%)":
        document.writeln("ALL PUBIC GARTHERING, NIGHT CLUBS, MARKETS, ETC OF ALL KINDS BANNED!!! (PARTIAL LOCKDOWN)");
        break;

    default:
        Document.writeln("YOU ARE ALL SAFE BUT THREAD EITH CAUTION");
}
*/
const userName = 'Emmanuel'
const userAge = 44;
const message = `hello, my name is ${userName} and i am ${userAge} years old`;

console.log(message);
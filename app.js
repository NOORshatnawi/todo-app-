
let userName = prompt("Please Enter your name");
let gender = prompt("Please Enter your gender (male or female)");
let age = prompt("Please Enter your age");
if (age <= 0)
    alert("The Age should be a real number");



let welcomeMsg = confirm("Do you want to Skip welcome message ?");

if (welcomeMsg) {
    if (gender == "male")
        alert("welcome to our Stars Fandom  Mr. " + userName);
    else if (gender == "female")
        alert("welcometo our Stars Fandom   Ms. " + userName);
    else
        alert("welcome to our Stars Fandom  " + userName);
}

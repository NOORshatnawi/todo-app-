
// 

let gender = prompt("Gender");

if ((gender !== "male") && (gender !== "female") ){

    alert("please choose between male or female");

    prompt("Gender");
}




//

let age = prompt("Age", "please enter your age!")

if (age <=0) {
    confirm("please re-enter your age with only positive valu !!")

    prompt("enter your age !", "positive vaue of age ")
}






// 

let welcomMessage = confirm("do you want see the welcoming message ? if no please press cancle")

if ((confirm = true) && (gender === "male")) 
    alert("Welcome To Our Page Mr" +" " + Name );


else if ((confirm = true) && (gender === "female"))  
    alert("Welcome To Our Page Ms"+" " + Name );


// ---------------------------------------------------------------- 


// 
// 

let firstYesNo = prompt("This is the first time i visit this website");

let yesNoInput1 = firstYesNo.toLowerCase();

if ((yesNoInput1 === "yes") || (yesNoInput1 === "y"))
    alert("keep always visit us");


else if ((yesNoInput1 === "no") || (yesNoInput1 === "n"))
    alert(" Welcome weclome");


else
    yesNoInput1 = "invalid";


// ------------------------------------------------------------------


const answers = new Array(yesNoInput1);



// -----------------------------------------------------------------

let secondYesNo = prompt("Do you have any suggestions ?");

let yesNoInput2 = secondYesNo.toLowerCase();

switch (yesNoInput2) {

    case "yes": prompt("write your suggestions here please");

        break;

    case "y": prompt("write your suggestions here please ");

        break;

    case "no": alert("remind me later");

        break;

    case "n": alert("Ok we will remind you later");

        break;

    default:

        yesNoInput2 = "invalid";
}

answers.push(yesNoInput2);

// -----------------------------------------------------------


let thirdYesNo = prompt("Do you like to cook?");

let yesNoInput3 = thirdYesNo.toLowerCase();

switch (yesNoInput3) {

    case "yes" : alert("Well ,keep going  :)")

    break;

    case "y" : alert("Well , keep going:)")

    break;

    case "no" : alert("Then you should to learn ")

    break;

    case "n" : alert("Then you should to learn")

    break;


    default : 

    yesNoInput3 = "invalid"
}

answers.push(yesNoInput3);


console.log(answers)



// --------------------------------------------------- 


let rating = prompt("How many stars do you rate our webstie ?? from 1 - 5");

let numberRate = parseInt(rating);

if (numberRate < 0) {

    numberRate = 0;
}

else if (numberRate > 5) {
    numberRate = 5;
}

else {
    rating = "invalid"
}

console.log(" Your number of rate is" + " ", numberRate);






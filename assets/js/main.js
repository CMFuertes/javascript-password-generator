// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // GIVEN I need a new, secure password
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}



// *********************** function logic **********************
// THEN I am presented with a series of prompts for password criteria
// ??????? what series
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// ????? i thought that is a given

// collected all the data here *************************
// ************ 1 PROMPT *************
// ************ need validation ***********


// generatePassword function should be below
function generatePassword () {
    // WHEN prompted for the length of the password
    var passLength = prompt("Please enter how many characters you would like your password to be. \nMust be between 8 - 128 characters.");
    
    var lengthConfirm = parseInt(passLength);
    console.log(lengthConfirm);
 
// THEN I choose a length of at least 8 characters and no more than 128 characters
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert ("Error. Choice is not valid. Please try again.");
        return;
    }



// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// each prompt needs to be validated...
// in this case, we should probably use a function to turn the length into a number


// ************** 4 confirms **************
var collectionOfValids = [];
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var lowerCaseChar = "abcdefghiklmnopqrsttuvwxtz" .split("");
var numberChar = "0123456789" .split ("");
var specialChar = "*&^%$#@!?><{}" .split("");


// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// we need a confirm to ask the user if they want to use lowercase
var lowerCaseConfirm = confirm("Do you want your password to include lowercase letters?");
    if(lowerCaseConfirm === true) {
        for (var i = 0; i < lowerCaseChar.length; i++) {
            collectionOfValids.push(lowerCaseChar[i]);
        }
    }
// we need a confirm to ask the user if they want to use uppercase
var upperCaseConfirm = confirm("Do you want your password to include uppercase letters?");
    if (upperCaseConfirm === true) {
        for (var i = 0; i < upperCaseChar.length; i++) {
            collectionOfValids.push(upperCaseChar[i]);
        }
    }
// we need a confirm to ask the user if they want to use numeric
var numberConfirm = confirm("Do you want your password to include numbers");
    if (numberConfirm === true) {
        for (var i = 0; i < numberChar.length; i++) {
            collectionOfValids.push(numberChar[i]);
        }
    }
// we need a confirm to ask the user if they want to use special characters    
var specialConfirm = confirm("Do you want your password to include special characters?");
    if (specialConfirm === true) {
        for (var i = 0; i < specialChar.length; i++) {
            collectionOfValids.push(specialChar[i]);
        }
    }

// using the number from above and the 4 booleans, create password
 var randomPassword = "";
 for (var i = 0; i < lengthConfirm; i++) {
     collectionOfValids[
         Math.floor(Math.random() * collectionOfValids.length)];
     randomPassword +=
        collectionOfValids[
            Math.floor(Math.random() * collectionOfValids.length)
        ];
    }
 return randomPassword;
}
// end of "collected all the data here" *************************


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page







// Add event listener to generate button
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // GIVEN I need a new, secure password
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
// generatePassword function should be below
// ***************************** function logic**********

// THEN I am presented with a series of prompts for password criteria
// ????? What series
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// ????? I thought that is a given 


// ****** 1 PROMPT ********
// ****** need validation ******
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// we need a prompt here and ask for the length from the user
// check IF the input number is < 8 and > 128

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// Each prompt needs to be validated...
// in this case, we should probably use a function to turn the length into a number


// ***************** 4 confirms *****************
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// we need a confirm and ask the user if they want to use lowercase
// we need a confirm and ask the user if they want to use upperrcase
// we need a confirm and ask the user if they want to use numeric
// we need a confirm and ask the user if they want to use special chaters

// end of "collected all of the data here" ***********************
// using the number from above and the 4 booleans 







// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// all the information is gathered (all prompts are finished getting input)
// all the HARD logic goes here  ????????


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// either do an alert with the password... or just check to see if my variable has a password 

// ***************************** end function logic**********





// ```

// Add event listener to generate button
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);

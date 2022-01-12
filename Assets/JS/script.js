// Prompts user for information on password
function promptUser() {
  // WHEN prompted for the length of the password
  const chosenLength = alert("Please choose the length of the password");
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  const passwordLength = Number(
    prompt("The password must be between 8-128 characters")
  );
  if (
    passwordLength < 8 ||
    passwordLength > 128 ||
    !Number(passwordLength) ||
    !passwordLength
  ) {
    alert("Invalid Response, please try again");
    return;
  }
  // WHEN asked for character types to include in the password
  alert("Please choose what type of characters you would like");
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or + special characters
  const confirmUppercase = confirm("Would you like uppercase characters?");
  const confirmLowercase = confirm("Would you like lowercase characters?");
  const confirmSpecials = confirm("Would you like special characters?");
  const confirmNumbers = confirm("Would you like numbers?");

  const confirmations = [
    confirmUppercase,
    confirmLowercase,
    confirmSpecials,
    confirmNumbers,
  ];
  return [passwordLength, confirmations];
}

// Function that will return users chosen characters
function characterTypes(userChoice) {
  // All char types
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const specials = "!@#$%^&*()_+{}:\"<>?|[];',./`~";
  const numbers = "0123456789";

  const totalArray = [uppercase, lowercase, specials, numbers];

  // Array with all confirmations
  const choiceArray = [];

  // Loop through array and add strings composed of true values
  for (let i = 0; i < userChoice.length; i++) {
    if (userChoice[i] === true) {
      choiceArray.push(totalArray[i]);
    }
  }
  return choiceArray.join("");
}

// Generates random password
function randomGenerator(length, passwordCharacters) {
  let retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += passwordCharacters.charAt(
      Math.floor(Math.random() * passwordCharacters.length)
    );
  }
  return retVal;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const userInputs = promptUser();
  const [chosenLength, userConfirms] = userInputs;
  const passwordChoices = characterTypes(userConfirms);

  var passwordText = document.querySelector("#password");
  passwordText.value = randomGenerator(chosenLength, passwordChoices);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

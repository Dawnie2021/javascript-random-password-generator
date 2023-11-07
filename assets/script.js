
// added variables for the things that will consist of a password
// added an array called possibleCharacters
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '?'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// added a function
function generatePassword() {

  // all code goes here
  // added my first prompt
  // added the rest of my prompts

  // empty string that will hold the password
  var password = ""
  
  validCharacters = []
  
  // changed password length prompt
  var passwordLength = prompt('How many characters would you like to include in your password? Must be between 8 and 128 characters.')
  // added an if else statment 
  // moved my alerts around
  if (passwordLength >= 8 && passwordLength < 129) {

  }

  else {

    alert("Password must be between 8 and 128 characters")
  }
  // changed back to confirm
  var includeSpecialCharactersResponse = confirm('Would you like to add special characters?')
  var includeUppercaseResponse = confirm('Would you like to add uppercase letters?')
  var includeLowercaseResponse = confirm('Would you like to include lowercase letters?')
  var includeNumbers = confirm("Would you like to include numbers?")
  // deleted if else condition

  // includes special characters if requested
  if (includeSpecialCharactersResponse)
    validCharacters = validCharacters.concat(specialCharacters)

  // include lowercase letters if requested
  if (includeLowercaseResponse)
    validCharacters = validCharacters.concat(lowercaseLetters)

  // include uppercase letters if requested
  if (includeUppercaseResponse)
    validCharacters = validCharacters.concat(uppercaseLetters)

  // include numbers if requested
  if (includeNumbers)
    validCharacters = validCharacters.concat(numbers)
  
    // added an if statement
  if (!includeUppercaseResponse && !includeLowercaseResponse && !includeNumbers && !includeSpecialCharactersResponse) {
    alert("Please select at least one character type.");
    return [null]
  }


  // added a for loop
  for (var i = 0; i < passwordLength; i++) {
    password += validCharacters[Math.floor(Math.random() * validCharacters.length)]
  }
  return password;
}


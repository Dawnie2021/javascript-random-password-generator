
// added variables for the things that will consist of a password
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?'];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// added a function
function generatePassword() {
  // all code goes here
  // added my first prompt
  // added the rest of my prompts
  var promptOne = prompt('Please choose a password between 8 and 128 characters.');
  var promptTwo = prompt('Would you like to add special characters?')
  var promptThree = prompt('Would you like to add uppercase letters?')
  var promptFour = prompt('Would you like to include lowecase letters?')
// added an if else statment 
  if (promptOne >8 && promptOne <129) {
    console.log('true');
 } 
 else {(promptOne<8 || promptOne >129) 
    alert("Password must be between 8 and 128 characters")
  }
// added an alert message
  if (promptTwo >=1) {
    console.log(true);
  }
    
  else { (promptTwo <1) 
    alert("Password must contain at least one special character." )
  }













// Returned something
return "Random Password Will Appear Here";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

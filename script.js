// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword () {
  // put the function thatasks the questions, then the variable that stores the callling of that as well as the function that takes the answers and generates the password. the final password should be returned as a string   
     var password = '';
     password = 'the password still needs to actually be gnerated';
     return password;
 }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

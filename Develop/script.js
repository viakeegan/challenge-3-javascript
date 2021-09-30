// Assignment code here
var generatePassword = function() {
  var passwordLength = prompt("How long would you like your password to be?");
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === null) {
    alert("Password length must be between 8 and 128 characters long.");
    return generatePassword();
  }
  localStorage.setItem("Password length", passwordLength);

  var criteria = ["lowercase letters","uppercase letters", "numbers", "special  characters"]\

  for(var i = 0; i < criteria.length; i++) {
    var answer = confirm(`Would you like to include ${criteria[i]} in your password?`);
    if (answer === true || answer === false){
      localStorage.setItem(criteria[i], answer);
    }
  };

  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

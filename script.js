var characterLength = 8;
var choiceArr = [];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9","0"];
var specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-", ".", "`", "~", "<", ">", "=", "-", "_"];

// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input


function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  console.log(correctPrompts, choiceArr);
  


  if (correctPrompts) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = newPassword;

  } else {
    passwordTest.value = "";
  }

}


function generatePassword() {
  console.log(choiceArr)
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  
  return password; 
  

}



function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(prompt("How many character do you want your password to be? (8 - 128 characters"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Password lenght has to be 8 - 128 characters long. Please try again.");
    return false;

   
   getPrompts()

  }

  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }


  if (confirm("Would you like uppercase letters in you password?")) {

    choiceArr = choiceArr.concat(upperCaseArr);
  }


  if (confirm("Would you like special characters in your password?")) {
    choiceArr =choiceArr.concat(specialCharArr);

  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat (numberArr);
  } 
  console.log[choiceArr]
  return true;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//********I have google'd, youtube and asked for help from TA's and I still cannot get this code to generate a password. I am way late on turning in this assignment so Ive decided to turn in anyway! :/ ****





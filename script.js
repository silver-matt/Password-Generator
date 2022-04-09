// Assignment code here
var charset1 = "abcdefghijklmnopqrstuvwxyz";
var charset2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charset3 = "0123456789";
var charset4 = "!@#$%^&*()";

var getLength = function () {
  length = parseInt(
    window.prompt(
      "Welcome to Password Generator! How long is your password? Please input a number between 8 and 128."
    )
  );
  console.log(length);
  if (length < 8 || length > 128) {
    alert("Your input is invalid. Please input a number between 8 and 128.");
    return getLength();
  } else {
    return length;
  }
};

getLength ()

var pickCharacter = function () {
  var charsetPool = "";

  

  q1 = window.confirm("Do you want to include lower-case letters?");
  if (q1) {
    charsetPool = charsetPool.concat(charset1);
  };
  q2 = window.confirm("Do you want to include upper-case letters?");
  if (q2) {
    charsetPool = charsetPool.concat(charset2);
  };
  q3 = window.confirm("Do you want to include numbers?");
  if (q3) {
    charsetPool = charsetPool.concat(charset3);
  };
  q4 = window.confirm("Do you want to include special characters?");
  if (q4) {
    charsetPool = charsetPool.concat(charset4);
  };
  return charsetPool;
};

pickCharacter ()

var generatePassword = function () {
  length = getLength();
  
  charsetPool = pickCharacter();
  
  poolLength = charsetPool.length;
  
  var passWord = "";
  for (let i = 0; i < length; i++) {
    passWord += charsetPool.charAt(Math.floor(Math.random() * poolLength));
  }
  
  return passWord;
};

generatePassword ()

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

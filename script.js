// Assignment code here




// variable values ref.
//special = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

//numbers = '0123456789';

//alpha1 =  'abcdefghijklmnopqrstuvwxyz';
//alpha2 =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//start function 
function generatePassword(){
 // is pasword legth
 var duration = parseInt(prompt(" How many characters would you like you password to be? A valid answer will be between 8 and 128"));
  console.log(duration)
         if ( duration < 8 || duration > 128 ){
         alert("you must choose a value between 8 and 128")
                               return generatePassword()}
         if (!duration){
         alert("password needs a length between 8 and 128")
                                return generatePassword()
            }
            //include numbers?
var confirmNumbers= window.confirm (" Would you like to include numbers in your password?")
        if (confirmNumbers) {
          var numbers = '0123456789';
            console.log("including Numbers")
         } 
        if (!confirmNumbers) {
           var numbers = '';
         }
         console.log(numbers)
          //include special char?
var confirmSpecial= window.confirm (" How about any special characters? ")
         if (confirmSpecial) {
          var special = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
           console.log("including Specials")
         }
         if (!confirmSpecial) {
           var special = '';
   
         }
         console.log(special)
         //include uppercase?
var confirmUppercase= window.confirm (" and Uppercase letters?")
         if(confirmUppercase){
          var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
           console.log("including uppercase")
         }
         if(!confirmUppercase){
           var uppercase = ""
         }
         //include lowercase?
var confirmLowercase = window.confirm ( "Finaly, would you care for lowercase letters to be included?")
        if (confirmLowercase){
          var lowercase = 'abcdefghijklmnopqrstuvwxyz';
          console.log("including lowercase")
        }
        if (!confirmLowercase){
          var lowercase = ""
        }
  
  window.alert("One " + duration + " character long password coming right up!")
    // combine all variables in password variable
    var passwordInclusion = numbers + special + uppercase + lowercase;
    console.log("inclusion : " +passwordInclusion) 
    

    var password= '';
    //add values to the duration length
  for(i = 0; i < duration;i++) { 
     var rune = Math.floor(Math.random() * passwordInclusion.length);
     password += passwordInclusion.substring(rune,rune+1)

       }
       console.log(password) 
   // copy password feature // last priority//
 
        

  
    return password;

}


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



// DECLARING VARIABLES 
// Declare variables that will store references for 
// <input type="button" id="submit-button">,
var submitButton = document.getElementById("submit-button");
// <input type="text" id="fullname">,
var fullnameInput = document.getElementById("fullname");
// <input type="text" id="email">
var emailInput = document.getElementById("email");
// <textarea id="message"></textarea>
var messageInput = document.getElementById("message");

// Declare variable that will 
// store regular expression for email
// Reference: https://www.mailercheck.com/articles/email-validation-javascript
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
 function validateForm() {      
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    var data = {};
    // Declare array that will store the errors
    var errors = [];

    /*
    +-----------+    
    | FULL NAME |
    +-----------+
    */
    // Check if fullname is not empty
    if (fullnameInput.value !== "") {
    // If so:
       // Pass the collected value
       // to your object "data".
       data.fullname = fullnameInput.value;
    } else {
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
       errors.fn = "Full name is missing";
    }
    // End your conditional here.
    

    /*
    +-------+    
    | EMAIL | 
    +-------+
    */
    // Check if email is not empty.
    if (emailInput.value !== "") {
       // Check if email is valid.
       if (emailPattern.test(emailInput.value)) {
       // If so:
          // Pass the collected value
          // to your object "data".
          data.email = emailInput.value;
       } else {
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
          errors.em = "Email is not valid";
       // End your nested conditional here.
       }
    // Otherwise:
    } else {
       // Create a corresponding error-message
       // and add it to your array "errors"
       errors.em = "Email is missing";
      } 
    // End your outer conditional here.
    

    
    /*
    +---------+    
    | MESSAGE | 
    +---------+
    */
    // Check if message is not empty.
    if (messageInput.value !== "") {
    // If so:
       // Pass the collected value
       // to your object "data".
       data.message = messageInput.value;
    // Otherwise:
    } else {
       // Create a corresponding error-message
       // and add it to your array "errors"
       errors.msg = "Message is missing";
    }
    // End your conditional here.


    /*
    +-----------------+
    | FEEDBACK/ERRORS |
    +-----------------+
    */
    // Check if there is anything in array errors
    if (Object.keys(errors).length > 0) {
       // If so: 
       // Print it in JavaScript console.
       console.log("ERRORS", errors);
    // Otherwise:
    } else {
       // Print the data in JavaScript console.
       console.log("COLLECTED DATA", data);
       // Clear text-fields
       fullnameInput.value = "";
       emailInput.value = "";
       messageInput.value = "";
    // End your conditional here.
    }
// Close your function here
 } 
// Register your form to "click" event.
submitButton.addEventListener("click", validateForm);
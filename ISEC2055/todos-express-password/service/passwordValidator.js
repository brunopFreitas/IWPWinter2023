module.exports = function (userPassword) {

var passwordValidator = require('password-validator');

    // Create a schema
var schema = new passwordValidator();

// Add properties to it
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().symbols(1,['#','@','!'])                 // Must have at least 1 symbol in the list
.has().not().spaces()                           // Should not have spaces


return schema.validate(userPassword)

}
// Our javascript for the CLIENT side.
// This will run on the browser.

/**
 * Takes no arguments, and creates a javascript alert in the client's browser.
 */
var sendAlert = function(){
    alert("THIS IS AN ALERT!");
};

/**
 * Used for getting the length of a string. For example only, you won't likely need to use something like this...
 * DIFFERENT FROM THE stringLength function in the server side javascript!!!
 *
 * @param str  - the string to have its length returned
 * @returns {*}  - an integer, the length of the string
 */
var testStringLength = function(str){
    return str.length;
};


/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnKittens = function(){
    return "kittens";
};

/**
 * Used to test if a number is non-negative
 *
 * @param number - the number to check
 * @returns {boolean} - true or false
 */
var isPositive = function(number){
    return number > 0;
}

/**
 * Used to test if an inputted grade is a valid one
 *
 * @param grade - the grade to check
 * @returns {boolean} - true or false
 */
var isValidGrade = function(grade){
    switch (grade) {
        case "A":
        case "a":
        case "B":
        case "b":
        case "C":
        case "c":
        case "D":
        case "d":
        case "F":
        case "f":
            return true;
        default:
            return false;
    }
}


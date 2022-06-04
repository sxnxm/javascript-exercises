const reverseString = function (greeting) {
    let result = "";
    for (let i = greeting.length - 1; i >= 0; i--) {
        result += greeting[i];
    }
    return result;
};
reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;

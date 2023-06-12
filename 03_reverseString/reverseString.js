const reverseString = function(myString) {
    // const length = myString.length;
    // let reversedString = '';
    
    // for (let i = 0; i < length; i++) {
    //     reversedString += myString.slice(-1 - i, length - i);
    // }

    // return reversedString;
    return myString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;

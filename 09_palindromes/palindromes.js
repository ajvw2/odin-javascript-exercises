const palindromes = function(myString) {
    myString = myString.toUpperCase().replace(/[^A-Z0-9]+/g, '');

    const letters = myString.split('');
    const myStringReversed = letters.reverse().join('');

    return myString === myStringReversed;
};

// Do not edit below this line
module.exports = palindromes;

const sumAll = function(p, q) {
    if (p < 0 || q < 0 || typeof p !== "number" || typeof q !== "number") {
        return "ERROR";
    }

    let min;
    let max;
    if (p < q)
    {
        min = p;
        max = q;
    } else {
        min = q;
        max = p;
    }

    let totalSum = 0;
    for (let i = min; i <= max; i++) {
        totalSum += i;
    }
    
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;

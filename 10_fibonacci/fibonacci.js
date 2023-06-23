const fibonacci = function(n) {
    if (n < 0) return "OOPS"
    
    let p = 0;
    let q = 1;
    for (let i = 0; i < n; i++) {
        let swap = q;
        q += p;
        p = swap;
    }
    
    return p;
};

// Do not edit below this line
module.exports = fibonacci;

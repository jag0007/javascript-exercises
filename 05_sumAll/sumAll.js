const sumAll = function(a, b) {
    if (a < 0 || b < 0 || type) {
        return 'ERROR';
    }    

    var small = a < b ? a : b;
    var large = a < b ? b : a;
    let sum = 0;
    for (i = small; i <= large; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

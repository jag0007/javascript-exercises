const removeFromArray = function(array, ...values) {
    let filteredArray = array;
    for (let n of values) {
        filteredArray = filteredArray.filter(x => !(x === n));
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;

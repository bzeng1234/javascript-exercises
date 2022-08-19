const removeFromArray = function(inputArr, ...arg) {
    let filteredArray = inputArr;
    if (arg.length >= 1) {
        for (let i = 0; i < arg.length; i++) {
            filteredArray = filteredArray.filter(e => e !== arg[i])
        }
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;

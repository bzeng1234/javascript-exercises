const sumAll = function(min, max) {

    if (typeof min !== 'number' || typeof max !== 'number' ) {
        return "ERROR";
    }

    if (min < 0 || max < 0) {
        return "ERROR";
    }

    let sum = 0;

    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }

    while(min <= max) {
        sum += min++;
    } 
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

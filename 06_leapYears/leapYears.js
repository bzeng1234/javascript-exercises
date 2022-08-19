const leapYears = function(inputYear) {

    // check if % 4
    if (inputYear % 4 == 0) {
        if (inputYear % 100 != 0 || (inputYear % 100 == 0 && inputYear % 400 == 0)) {
            return true;
        } else {
            return false;
        }
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;

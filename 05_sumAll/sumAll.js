const sumAll = function (a, b) {
    let add = 0;
    if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    } else if (a < 0 || b < 0) {
        return "ERROR";
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            add += i;
        }
        return add;
    } else {
        for (let i = b; i <= a; i++) {
            add += i;
        }
        return add;
    }

};

// Do not edit below this line
module.exports = sumAll;

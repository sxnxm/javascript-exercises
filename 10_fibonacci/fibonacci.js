const fibonacci = function (num) {
    result = 1;
    let a = 0;
    let b = 1;
    if (num < 0) return 'OOPS';


    for (let i = 1; i < num; i++) {
        result = a + b;
        a = b;
        b = result;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;

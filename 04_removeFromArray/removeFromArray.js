const removeFromArray = function (arr, ...deletion) {
    for (let j = 0; j < deletion.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === deletion[j]) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;


};

// Do not edit below this line
module.exports = removeFromArray;

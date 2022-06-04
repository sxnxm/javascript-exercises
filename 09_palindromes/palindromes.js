const palindromes = function (str) {
  let regex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
  cleanStr = str.toLowerCase().replace(regex, '').replaceAll(' ', '');
  reversed = cleanStr.split('').reverse().join('');
  if (cleanStr == reversed) {
    return true;
  } else {
    return false;
  }
};


// Do not edit below this line
module.exports = palindromes;

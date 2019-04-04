var words = ["ground", "control", "to", "major", "tom"];

var wLength = words.map(function(word){ 
      return word.length; 
});

var wUpper = words.map(function(word){ 
      return word.toUpperCase();
});

var wWords = words.map(function(word){ 
    return word.split('').reverse().join('');
});

console.log(wLength);
console.log(wUpper);
console.log(wWords);
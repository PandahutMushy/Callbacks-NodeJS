var words = ["ground", "control", "to", "major", "tom"];

var wWords = words.map(function(word){ 
    return word.split('').reverse().join('');
});

function getLength(arr, action) {
      var wLen = [];
      arr.map(function(word){
            wLen.push(word.length);
      });
      return action(wLen); 
}

function lenCbFunc (lengthArr)
{
      console.log(lengthArr);
}

function getUpper(arr, action) {
      var wUpp = [];
      arr.map(function(word){
            wUpp.push(word.toUpperCase());
      });
      return action(wUpp); 
}

function uppCbFunc(upperArr)
{
      console.log(upperArr);
}

function getSplit(arr, action) {
      var wSplit = [];
      arr.map(function(word){
            wSplit.push(word.split('').reverse().join(''));
      });
      return action(wSplit); 
}

function splitCbFunc(splitArr)
{
      console.log(splitArr);
}

getLength(words, lenCbFunc);
getUpper(words, uppCbFunc);
getSplit(words, splitCbFunc);
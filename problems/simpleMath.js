//assumptions
//single digits only e.g 0-9
//does not account for parentheses
function pemdas(str) {
  //todo: edge cases
  var result;
  var arr = str.split('');
  arr[0] = parseInt(arr[0]);
    //multiplication and division
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === '/' || arr[i] === '*') { 
      if (arr[i] === '/') {
        var replace = arr[i-1] / arr[i+1];
        arr.splice(i-1, 3, replace);
      } else if (arr[i] === '*') { 
        var replace = arr[i-1] * arr[i+1];
        arr.splice(i-1, 3, replace);
      }
    } 
  }
  var addSubStr = arr.join("");

  //helper function for addition and subtraction
  function addSubtractor(asStr){
    var total= 0, asStr = asStr.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while(asStr.length){
        total+= parseInt(asStr.shift());
    }
    console.log(total);
  }
  addSubtractor(addSubStr)
};




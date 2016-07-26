// Problem 1
var input = '00-44  48 5555 8361';
var input2 = '0 - 22 1985--324'; //022-198-53-24 
var input3 = '555372654'; //555-372-654
var input4 = '14 15 67-6-8 36-1'; 
function phone(input) {
  var inputArr = input.split('');
  var storage = [];
  for (var i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === ' ' || inputArr[i] === '-') {
      //next
    } else {
      storage.push(inputArr[i]);
    }
  }
  
  for (var k = 3; k < storage.length; k += 4) {
    if (storage.length - k < 2) {
      storage.splice(k-1,0,'-');
    } else {
      storage.splice(k,0,'-');  
    }
  }
  return storage.join("");
 }
phone(input);

// Problem 2
// http://pastie.org/10500052
// SELECT  sensor_id,  COUNT(*) 
//   FROM (SELECT DISTINCT SENSOR_ID,event_type
//          FROM  EVENTS  
//           ) as dt GROUP BY SENSOR_ID ORDER BY 2 DESC;

// Problem 3
var a = [9,9,6,7,8,10]
//find longest subsequece length of quasi in subsquence arrays
//quasi is when amiplitude < 1 aka biggestNum - smallesNum < 1

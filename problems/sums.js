//zenysis
var arr = [ -10, 12, 14, -4, 5];
// https://en.wikipedia.org/wiki/Maximum_subarray_problem
//Maximum_subarray_problem
var maxSum = 0;
var sum = 0;
for(var i = 0; i < arr.length; i++) {
  //using Math.max
  // currentSum = Math.max((currentSum+arr[i]), arr[i]);
  // maxSum = Math.max(currentSum, maxSum);
  sum += arr[i];
  if (maxSum < sum) {
    maxSum = sum;
  } else if (sum < 0){ //reset sum to 0
    sum = 0;
  }
  console.log(maxSum);
}

// give a list of n integers
//find pair that sum to K

var list = [1, 5, 10, 16, 12, 3, 4];
var target = 22;

for(var j = 0; j < list.length; j++) {
  var currentNum = list[j];
  for(var k = 0; k < list.length; k++) {
    if ((currentNum + list[k]) === target) {
      console.log(currentNum,list[k]);
    }
  }
}
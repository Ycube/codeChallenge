//Karat x Modsy 
//given an "image" find the upper left coordante
//find the height and width or the bottom right coordinate
var _ = require('underscore')

var image = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1], //contains a zero
  [1, 1, 1, 0, 0, 0, 1], //contains 
  [1, 1, 1, 1, 1, 1, 1]
];

var firstZero
var counter = 1; //aka width
var rowCounter = 1;

//loop through image array
  //loop through index of image array
    if (index === 0 && !firstZero) { 
      set firstZero to coordinates
      while (index === 0) {
        counter++
      } 
      //search down logic
    }
    //break?
  //end inner loop
  if (index contains(0)) {
        rowCounter++;
  }
//end outer loop
console.log(firstZero, counter, rowCounter)



/* 
Your previous Markdown content is preserved below:

var image = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1], //contains a zero
  [1, 1, 1, 0, 0, 0, 1], //contains 
  [1, 1, 1, 1, 1, 1, 1]
];

1 - white
0 - black

1) upper-left bottom-right
2,3  3,5 
2) upper-left width height
2,3  3,2

//var firstZero
//var counter = 1
var rowCounter = 1

//loop through image array
  //loop through index of image array
    //if (index === 0) { 
      set firstZero to coordinates
      while (index === 0) {
        counter++
      
      }
    } 
 */
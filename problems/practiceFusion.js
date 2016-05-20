// A site contains a listing of doctors. Users can browse for doctors given a specific specialty, area,
// review score etc. Write a class which when given a doctor, provides a list of similar doctors, in a
// prioritized order. You define what similar means and the result ordering, but clearly document
// any assumptions in your code. You can assume the entire directory of doctors fits into memory,
// and write in whatever language you are most comfortable with.
// Aim to spend a maximum of 45 minutes on this coding challenge. If applicable, note down any
// remaining thoughts or things you would want to improve on with more time.
// Optional bonus – include unit tests for your class.

//assumptions
drObj contains the following
var drYale = {
  name: "yale Yuen",
  provider: "Blue Shield", //what healthcare provider they are in
  specialty: ['a', 'b,' 'd'], //list of specialties 
  location: "San Francisco", //address
  reviewScore: 7 //out of 10
};

var drBob = {
  name: "Bob Smith",
  provider: "Blue Shield", //what healthcare provider they are in
  specialty: ['a', 'b', 'c'], //list of specialties 
  location: "Daly City", //address
  reviewScore: 6 //out of 10
}

//areas of improvements
//would NOT want to use triple nested for loops
//for the GET request only get drs from same health care provider/ insurance
//score algorithm is heavy on review if dr has high score review and can be skewed and I would like to improve it based on more factors in a real case situation  
//for location calculation, i would calculate based on coordtinate distances and weigh that into score
//for each time score is incremented I rather have seperate functions to calculate more complex numerical values 

//TIME: around 1hr

//GET list of allDrs via api  
var allDrs = []; 

function similarDoctor(drObj){
  var similarDrs = [];
  var score = 0;
  
  //loop thourgh list of allDrs  
  for (var i = 0; i < allDrs.length; i++) {
    //itterate through specalties
    for (var sp = 0; sp < allDrs[i].specailty.length; sp++) {
      var currentSpeciality = allDrs[i].specailty[sp];
      //iterate passed in dr objects specialty and compare to currentDrSpecialtiy
      for(var k = 0; k < drObj.specialty.length; k++) {
        //if specailty matches
        if (currentSpeciality === drObj.specialty[k]) {
          score++;
        }
      }
    }
    //if location are matches
    if (allDrs[i].location === drObj.location) {
      score++;
    }

    //add score to currentDr w/ review score
    score = score + allDrs[i].reviewScore;
    allDrs[i].score = score;
    
    //loop through drArray
    for (var j = 0; j < similarDrs.length; j++) {
      //compare score to each dr in drArray 
      if (allDrs[i].score < similarDrs[j].score && allDrs[i].score > similarDrs[j++].score) {
        //insert currentDr into similarDrs based on score
        similarDrs.splice(j,0,allDrs[i]);
      }
    }
    //reset score to 0
    score = 0;    
  }
  return similarDrs;
};


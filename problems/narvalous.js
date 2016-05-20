function bigPopulation(peopleArr) {
  var year = {1900:0 ... 2000:0};
  var population = 0;
  var bigYear = 1900;
  for (var i = 0; i < peopleArr.length; i++) {
    var age = peopleArr[i].death - peopleArr[i].birth;
    for (var k = peopleArr.birth; k < peopleArr.death; k++){
      year[k]++;
    }    
  }
  
  for (var j in year){
    if (year[j] > population){
      population = year[j];
      bigYear = j;
    }
  }
  return bigYear;
};
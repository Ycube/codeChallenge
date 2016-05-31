//clover health
// Given an integer, return a string representation of that integer with ',' at the appropriate groupings to indicate thousands places.

// number = 1234
// numstring = '1,234'


//1000 1,000
//100 
//12000 12000

function numToString(num){
    //take the number 100000 --> '100,000'
    //edge case
    if (num.toString().length <=3 ){
        console.log(num.toString());
        return num.toString();
    }
    //split num to array
    var numArr = num.toString().split(""); //['1','0','0','0','0','0'];
    //iterate the array from the end
    for(var i = numArr.length-3; i > 0; i -= 3){ //[100,000]
       //insert , for every 3 places
       numArr.splice(i,0,','); //['1', ',' , '0', '0' ,'0']
    } 
    //join the array
    return numArr.join();
};

numToString(10000);
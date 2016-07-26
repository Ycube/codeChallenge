let factorial = (n) => {
  if (n <= 2) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
};

// Bubble Sort
// Time: O(n^2)
let bubbleSort = (list) => {
  let swapped;
  do {
    swapped = false; //if this is commented out it breaks
    for (let i = 0; i < list.length; i++) {
      if (list[i] > list[i+1]) {
        const temp = list[i];
        list[i] = list[i+1];
        list[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return list
};

//insertion sort
// Time: O(n^2)
let insertionSort = (list) => {
  for (let i = 1; i < list.length; i++) {
    for (let j = 0; j < i; j++) {
      if (list[i] < list[j]) {
        const spliced = nums.splice(i, 1);
        list.splice(j, 0, spliced[0]);
      }
    }
  }
  return list;
}

// Merge Sort
// Time: O(nlogn)
let mergeSort = (list) => {
  if (list.length < 2) {
    return list; 
  } 

  const middle = Math.floor(list.length/2);
  const leftArr = list.slice(0, middle);
  
  const rightArr = list.slice(middle);
  

  const sortedL = mergeSort(leftArr);
  const sortedR = mergeSort(rightArr);

  return merge(sortedL, sortedR);
};

let merge = (arr1, arr2) => {
  const results = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      results.push(arr1.shift()); //takes 0th element and pushes into results
    } else {
      results.push(arr2.shift());
    }
  }

  while (arr1.length) {
    results.push(arr1.shift());
   }

   while (arr2.length) {
      results.push(arr2.shift());
   }

  return results;
};


let test = [10,5,4,8,2,6,4,7,9,1];
console.log(mergeSort(test));


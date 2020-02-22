/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

//  let testArr = [1, 4, 8, 9, 7, 4, 2]

var quicksort = function(array) {
  let pivot = Math.floor(array.length / 2)
  let smallArr = []
  let largeArr = []
  // let pivotArr = [];

  
  if(array.length < 2){
    return array
  }
  for(let i = 0; i < array.length; i++){
    if(array[i] < array[pivot]){
      smallArr.push(array[i])
    } else {
      largeArr.push(array[i])
    }
    // pivotArr.push(pivot)
  }
  return [...quicksort(smallArr), array[pivot], ...quicksort(largeArr)]

};

// debugger
// quicksort(testArr)


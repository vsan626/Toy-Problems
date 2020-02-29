/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
  //make string into an array
  //iterate over the new array
  //shuffle each element and push the newly created shuffle into result arr
  let result = []
  let strArr = string.split('')
  if(string.length === 1){
    return string
  }
  
  

};
var anagrams = allAnagrams('abc');
console.log(anagrams);
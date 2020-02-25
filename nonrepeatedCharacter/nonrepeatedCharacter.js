/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  let repeatCounter = {}
  let strArr = string.split('')
  let result;
  for(let i = 0; i < strArr.length; i++){
    if(repeatCounter[strArr[i]] === undefined){
      repeatCounter[strArr[i]] = 0
    } else {
      repeatCounter[strArr[i]]++
    }
  }
  for(let key in repeatCounter){
    if (repeatCounter[key] === 0){
      result =  key
      break
    }
  }
  return result
  // console.log(repeatCounter)
};

debugger
firstNonRepeatedCharacter('AACBDB')
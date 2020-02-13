/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (num) {
  var rps = ['R', 'P', 'S']
  var outcome = []
//   var count = 0
//   var keyCount = 0

  for(var i = 0; i < rps.length; i++){
    for(var j = 0; j < rps.length; j++){
      for(var k = 0; k < rps.length; k++){
        outcome.push(rps[i] + rps[j] + rps[k])
      }
    }
  }



  return outcome
  // TODO: your solution here
};


// var rockPaperScissors = function (num) {
//   var rps = ['R', 'P', 'S']
//   var outcome = {}
//   var count = 0

//   if(count <= num){
//     for(var i = 0; i < rps.length; i++){
//       if(outcome[count] === undefined){
//         outcome[count] = rps[i]
//       } else {
//         outcome[count].concat(rps[i])
//       }
//     }
//     count++
//     rockPaperScissors(num - 1)
//   }



//   return Object.values(outcome)
//   // TODO: your solution here
// };

// var testing = rockPaperScissors(num)
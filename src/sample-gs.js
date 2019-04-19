/* Problem Name is &&& Second Smallest &&& PLEASE DO NOT REMOVE THIS LINE. */

/**
 * Instructions to candidate.
 * 1) Run this code in the REPL to observe its behaviour. The
 *    execution entry point is main().
 * 2) Consider adding some additional tests in doTestsPass().
 * 3) Implement secondSmallest() correctly.
 * 4) If time permits, some possible follow-ups.
 */


/**
 * Returns the second smallest element in the array x.
 * Returns 0 if the array has fewer than 2 elements.
 */
function secondSmallest(x)
{
   return 0;
}


/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass()
{
  // todo: add more test cases
  var testArrays  = [[0], [-44,-44,-4,-3,22,5,-11,5,89,0,22], [5,22,65,1,666,6] ];
  var testResults = [0,-11, 5];

  // Run through the tests and make assertions
  for(var i = 0; i < testArrays.length; i++)
  {
  if(secondSmallest(testArrays[i]) != testResults[i])
  {
    return false;
  }
  }
  return true;
}

/**
 * Main execution entry.
 */
if(doTestsPass())
{
  console.log("All tests pass!");
}
else
{
  console.log("There are test failures.");
}


/**
 * Returns the Best Average Grade.
 */
function bestAvgGrade(x)
{
   return 0;
}


/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass()
{
  // todo: add more test cases
  var testArrays  = [["jerry","65"],["bob","90"],["jerry","23"],["eric","23"]]
  var testResults = 90;
  
  // Run through the tests and make assertions
  if(bestAvgGrade(testArrays) != testResults)
  {
    return false;
  }

  return true;
}


/**
 * Main execution entry.
 */
if(doTestsPass())
{
  console.log("All tests pass!");
}
else
{
  console.log("There are test failures.");
}


/* Problem Name is &&& Find longest substring with start index &&& PLEASE DO NOT REMOVE THIS LINE. */

/**
 * Instructions to candidate.
 * 1) Run this code in the REPL to observe its behaviour. The
 *    execution entry point is main().
 * 2) Consider adding some additional tests in doTestsPass().
 * 3) Implement secondSmallest() correctly.
 * 4) If time permits, some possible follow-ups.
 */


/**
 * Returns the longest substring with start index.
 * Returns 0 if the string has fewer than 2 letters.
 */
function longestSubString(x)
{
   return 0;
}


/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass()
{
  // todo: add more test cases
  var testArrays = [['abcabdddd'],['100100000'],['']];
  var testResults = [[5,4],[4,5],[-1,0]];
  
  // Run through the tests and make assertions
  for(var i = 0; i < testArrays.length; i++){
    if(longestSubString(testArrays[i]) != testResults[i])
    {
      return false;
    }
  }  
    return true;
  
}


/**
 * Main execution entry.
 */
if(doTestsPass())
{
  console.log("All tests pass!");
}
else
{
  console.log("There are test failures.");
}



// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"


// President Election

var _ = require('underscore');

var solution = (function(){

function whoIsElected(n, k){
  return -1;
}

function doTestsPass(testCases){
  var passes = true;
  for(var i=0; i<testCases.length; i++){
    const testCase = testCases[i];
    const expectedResult = testCase[2];
    const actualResult = whoIsElected(testCase[0], testCase[1]);
    passes = passes && (expectedResult === actualResult);
  }
  return passes;
}

return {
  doTestsPass: doTestsPass,
  whoIsElected: whoIsElected
};

})();

const testCases = [
  [1,1,1],
  [2,2,1],
  [4,2,1],
  [100,2,73]
];


if(solution.doTestsPass(testCases)){
  console.log('All tests pass');
}else {
  console.error("Not all tests pass:(");
}

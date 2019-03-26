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
  var testArrays  = [[0], [0, 1]];
  var testResults = [0, 1];
  
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



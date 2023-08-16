function isPalindrome(word) {
  // Write your algorithm here
 // 1 - take the parameter and create an array of each letter. 
const string = word.split('');
const joinoriginal = string.join('');

//2- write back the array in reverse
const reversstring = string.reverse();
const joinreverse = reversstring.join('');

//3- compare array 1 with reversed array 2 for equality.
return(Boolean(joinoriginal==joinreverse));

 


};

//console.log



/* 
  Add your pseudocode here
  Enter a phrase that can be read left to right
  this phrase if spelled backwards should read as it were left to right.
*/

/*
  Add written explanation of your solution here
  1 - take the parameter and create an array of each letter.
  2- write back the array in reverse
  3- compare array 1 with reversed array 2 for equality.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
  
}

module.exports = isPalindrome;

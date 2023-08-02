//2) Convert all the strings to title caps in a string array
function toTitleCase(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }
  
  function convertToTitleCaps(arr) {
    return arr.map((str) => toTitleCase(str));
  }
  
  // Example usage:
  const inputArray = ['hello world', 'this is a sample string', 'javascript is awesome'];
  const resultArray = convertToTitleCaps(inputArray);
  console.log(resultArray);

*****-----------------------------------------------------------------------*****

//anonyomus function:

const strings = ["this is a sample string", "another example", "javascript is awesome"];

const titleCaseStrings = strings.map(function (str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
});

console.log(titleCaseStrings);

********------------------------------------***********
//arrow function:

const titleCase = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  // Example usage:
  const inputString = "Hey hi guys";
  const titleCasedString = titleCase(inputString);
  console.log(titleCasedString);

*******--------------------------------------------********
//iife function:

(function () {
    function toTitleCase(str) {
      return str.replace(/\b\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  
    var inputStrings = ["hello world", "this is a test", "javascript is awesome"];
    var titleCasedStrings = inputStrings.map(toTitleCase);
  
    console.log(titleCasedStrings);
  })();
  
******-----------------------------------------------------**********

//3) Sum of all numbers in an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  const myArray = [1, 2, 3, 4, 5];
const result = sumArray(myArray);
console.log(result);

**********-------------------------------------------***********

// anonymous function;
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);

*****--------------------------------------------------------------************

//Arrow function 
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);

******------------------------------------------****

//iife function
(function() {
    const numbers = [1, 2, 3, 4, 5];
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    console.log("The sum of the numbers is: " + sum);
  })();

**********------------------------------------------------------***********
//4) Return all the palindromes in an array

function isPalindrome(str) {
    // Helper function to check if a string is a palindrome
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  function findPalindromesInArray(arr) {
    // Function to find all palindromes in the input array
    const palindromes = [];
    
    for (const item of arr) {
      if (typeof item === 'string' && isPalindrome(item)) {
        palindromes.push(item);
      }
    }
    
    return palindromes;
  }
  
  // Example usage:
  const inputArray = ["level", "hello", "deified", "world", "racecar"];
  const result = findPalindromesInArray(inputArray);
  console.log(result);

********-------------------------------------------***************
//anonyomus function:

const isPalindrome = str => {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  };
  
  const findPalindromesInArray = (arr) => {
    return arr.filter(item => isPalindrome(item));
  };
  
  // Example usage:
  const inputArray = ['level', 'hello', 'civic', 'world', 'deified'];
  const palindromes = findPalindromesInArray(inputArray);
  console.log(palindromes);
*******---------------------------------------------************
Arrow function:
const isPalindrome = (word) => {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  };
  
  const findPalindromesInArray = (arr) => {
    return arr.filter((item) => isPalindrome(item));
  };
  
  // Example usage:
  const inputArray = ["level", "hello", "racecar", "world", "deified"];
  const palindromes = findPalindromesInArray(inputArray);
  console.log(palindromes);
************-----------------------------------------------*********
//iife function:
const arrayPalindromes = (function () {
    function isPalindrome(str) {
      // Remove non-alphanumeric characters and convert to lowercase for case-insensitivity
      const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const reversedStr = cleanedStr.split('').reverse().join('');
      return cleanedStr === reversedStr;
    }
  
    return function (arr) {
      const palindromes = [];
      for (const item of arr) {
        if (typeof item === 'string' && isPalindrome(item)) {
          palindromes.push(item);
        }
      }
      return palindromes;
    };
  })();
  
  // Example usage:
  const inputArray = ['level', 'hello', 'racecar', 'world', 'deified'];
  const result = arrayPalindromes(inputArray);
  console.log(result); // Output: ["level", "racecar", "deified"]
 
  
  
  
  
  
  
  
  



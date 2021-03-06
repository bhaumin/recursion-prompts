/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 1;
  }

  return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  }

  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1 && !Array.isArray(array[0])) {
    return array[0];
  } else if (Array.isArray(array[0])) {
    return arraySum(array[0]) + arraySum(array.slice(1));
  }

  return array[0] + arraySum(array.slice(1));
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) {
    return true;
  }

  if (Math.abs(n) === 1) {
    return false;
  }

  return isEven(Math.abs(n) - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  const sign = n / Math.abs(n);

  if (n === 0 || Math.abs(n) === 1) {
    return 0;
  } else if (Math.abs(n) === 2) {
    return sign;
  }

  return (n - sign) + sumBelow(n - sign);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  const rangeOrder = x <= y ? 1 : -1;

  if (Math.abs(y - x) <= 1) {
    return [];
  } else if (Math.abs(y - x) === 2) {
    return [x + rangeOrder];
  }

  return [x + rangeOrder, ...range(x + rangeOrder, y - rangeOrder), y - rangeOrder];
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp === 1) {
    return base;
  }

  if (exp < 0) {
    return 1 / exponent(base, -exp);
  }

  const result = exponent(base, parseInt(exp / 2));
  return (exp % 2 === 0) ? result * result : result * result * base;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  }

  if (n === 0 || n % 2 !== 0) {
    return false;
  }

  return powerOfTwo(Math.floor(n / 2));
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length <= 1) {
    return string;
  }

  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if (string.length <= 1) {
    return true;
  } else if (string.length === 2) {
    return string[0].toLowerCase() === string[1].toLowerCase();
  } else if (string[0].toLowerCase() !== string[string.length - 1].toLowerCase()) {
    return false;
  }

  return palindrome(string.slice(1, -1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  if (x >= 0 && x < y) {
    return x;
  } else if (x <= 0 && y < 0 && x > y) {
    return x;
  } else if (x <= 0 && y > 0 && x + y > 0) {
    return x;
  }

  let diff = x - y;
  if (x < 0 && diff < x) {
    diff = x + y;
  }

  return modulo(diff, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  } else if (x === -0 || y === -0) {
    return -0;
  }

  if (y < 0) {
    return -x + multiply(x, y + 1);
  } else {
    return x + multiply(x, y - 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  if (x === 0) {
    return 0;
  }

  if (x > 0 && y > 0) {
    return x < y ? 0 : divide(x - y, y) + 1;
  } else if (x < 0 && y < 0) {
    return x > y ? 0 : divide(x - y, y) + 1;
  } else if (x > 0 && y < 0) {
    return x + y < 0 ? 0 : divide(x + y, y) + 1;
  } else if (x < 0 && y > 0) {
    return x + y > 0 ? 0 : divide(x + y, y) + 1;
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }

  if (x === 0) {
    return y;
  } else if (y === 0) {
    return x;
  }

  return x >= y ? gcd(y, x % y) : gcd(x, y % x);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }

  if (str1[0] !== str2[0]) {
    return false;
  }

  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 0) {
    return [];
  }

  return [ str[0] ].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) {
    return [];
  }

  return reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) {
    return [];
  }

  const tempList = buildList(value, length - 1);
  tempList.push(value);

  return tempList;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 0) {
    return [];
  } else if (n % 3 === 0 && n % 5 === 0) {
    return fizzBuzz(n - 1).concat('FizzBuzz');
  } else if (n % 3 === 0) {
    return fizzBuzz(n - 1).concat('Fizz');
  } else if (n % 5 === 0) {
    return fizzBuzz(n - 1).concat('Buzz');
  } else {
    return fizzBuzz(n - 1).concat(n.toString());
  }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  }

  return array[0] === value ? countOccurrence(array.slice(1), value) + 1 : countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  }

  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  if (Object.keys(obj).length === 0) {
    return 0;
  }

  let count = 0;
  for (let k in obj) {
    if (k === key) {
      count++;
    }

    if (typeof obj[k] === 'object') {
      count += countKeysInObj(obj[k], key);
    }
  }

  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  if (Object.keys(obj).length === 0) {
    return 0;
  }

  let count = 0;
  for (let k in obj) {
    if (typeof obj[k] === 'object') {
      count += countValuesInObj(obj[k], value);
    } else if (obj[k] === value) {
      count++;
    }
  }

  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {

  for (let key in obj) {

    if (typeof obj[key] === 'object') {
      if (key === oldKey) {
        obj[newKey] = replaceKeysInObj(obj[key], oldKey, newKey);
        delete obj[key];
        continue;
      }

      obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
      continue;
    }

    if (key === oldKey) {
      obj[newKey] = obj[key];
      delete obj[key];
    }
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  } else if (n === 1) {
    return [ 0, 1 ];
  }

  const resultNMinus1 = fibonacci(n - 1);
  const len = resultNMinus1.length;
  return resultNMinus1.concat(resultNMinus1[len - 2] + resultNMinus1[len - 1]);
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }

  if (n === 0 || n === 1) {
    return n;
  }

  return nthFibo(n - 2) + nthFibo(n - 1);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0) {
    return [];
  }

  return [ array[0].toUpperCase() ].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) {
    return [];
  }

  return [ array[0][0].toUpperCase() + array[0].slice(1) ].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }

  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  const flatArr = [];

  for (let item of array) {
    if (Array.isArray(item)) {
      flatArr.push(...flatten(item));
    } else {
      flatArr.push(item);
    }
  }

  return flatArr;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (str.length === 0) {
    return {};
  }

  obj = letterTally(str.slice(1), obj);

  if (obj.hasOwnProperty(str[0])) {
    obj[str[0]]++;
  } else {
    obj[str[0]] = 1;
  }

  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if (list.length === 0) {
    return [];
  }

  const result = compress(list.slice(0, -1));

  if (result.length === 0 || result[result.length - 1] !== list[list.length - 1]) {
    result.push(list[list.length - 1]);
  }

  return result;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) {
    return [];
  }

  const lastElem = array[array.length - 1].concat(aug);
  const result = augmentElements(array.slice(0, -1), aug)
  result.push(lastElem);
  return result;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 0) {
    return [];
  }

  const result = minimizeZeroes(array.slice(0, -1));

  if (result.length === 0 || result[result.length - 1] !== 0 || result[result.length - 1] !== array[array.length - 1]) {
    result.push(array[array.length - 1]);
  }

  return result;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) {
    return [];
  } else if (array.length === 1) {
    return [ array[0] < 0 ? -1 * array[0] : array[0] ];
  }

  const result = alternateSign(array.slice(0, -1));

  if (result.length > 0) {
    if (result[result.length - 1] < 0) {
      result.push(array[array.length - 1] < 0 ? (-1 * array[array.length - 1]) : array[array.length - 1]);
    } else {
      result.push(array[array.length - 1] < 0 ? array[array.length - 1] : (-1 * array[array.length - 1]));
    }
  }

  return result;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if (str.length === 0) {
    return '';
  }

  if (str.length === 1) {
    switch (str[0]) {
      case '0':
        return 'zero';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      default:
        return str;
    }
  }

  return numToText(str[0]) + numToText(str.slice(1));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  if (!node) {
    node = document.documentElement;
  }

  let count = 0;
  if (node.tagName.toLowerCase() === tag.toLowerCase()) {
    count++;
  }

  for (let childNode of node.children) {
    count += tagCount(tag, childNode);
  }

  return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  if (array.length === 0) {
    return null;
  }

  const low = 0;
  const high = array.length - 1;
  const mid = low + Math.floor((high - low + 1) / 2);

  if (array[mid] === target) {
    return mid;
  }

  if (target < array[mid]) {
    // search left
    return binarySearch(array.slice(low, mid), target);
  } else {
    // search right
    const result = binarySearch(array.slice(mid + 1), target);
    return result !== null ? mid + 1 + result : null;
  }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  if (array.length === 0) {
    return [];
  }

  if (array.length === 1) {
    return [ array[0] ];
  }

  const mid = Math.floor(array.length / 2);
  const sortedHalf1 = mergeSort(array.slice(0, mid));
  const sortedHalf2 = mergeSort(array.slice(mid));

  const result = [];
  let i = 0;
  let j = 0;

  while (i < sortedHalf1.length && j < sortedHalf2.length) {
    if (sortedHalf1[i] <= sortedHalf2[j]) {
      result.push(sortedHalf1[i++]);
    } else {
      result.push(sortedHalf2[j++]);
    }
  }

  while (i < sortedHalf1.length) {
    result.push(sortedHalf1[i++]);
  }

  while (j < sortedHalf2.length) {
    result.push(sortedHalf2[j++]);
  }

  return result;
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (isObject(input)) {
    // Object
    const result = {};
    for (let key in input) {
      const val = input[key];
      if (isObject(val) || Array.isArray(val)) {
        result[key] = clone(val);
      } else {
        result[key] = val;
      }
    }

    return result;
  } else if (Array.isArray(input)) {
    // Array
    const result = [];
    for (let item of input) {
      if (isObject(item) || Array.isArray(item)) {
        result.push(clone(item));
      } else {
        result.push(item);
      }
    }

    return result;
  }


  function isObject(input) {
    return typeof input === 'object' && !Array.isArray(input);
  }
};

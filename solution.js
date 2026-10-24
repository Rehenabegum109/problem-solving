// Problem 1: Staircase
let staircase = function (n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    result += " ".repeat(n - i) + "#".repeat(i);

    if (i < n) {
      result += "\n";
    }
  }

  return result;
};

// Problem 2: Grading Students
let gradingStudents = function (grades) {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }

    let nextMultiple = Math.ceil(grade / 5) * 5;

    if (nextMultiple - grade < 3) {
      return nextMultiple;
    }

    return grade;
  });
};
// Problem 3: Time Conversion
let timeConversion = function (s) {
  let period = s.slice(-2);
  let time = s.slice(0, -2);
  let [hour, minute, second] = time.split(":");

  if (period === "AM") {
    if (hour === "12") {
      hour = "00";
    }
  } else {
    if (hour !== "12") {
      hour = String(Number(hour) + 12);
    }
  }

  return `${hour}:${minute}:${second}`;
};
// Problem 4: Repeat String
let repeatStr = function (n, s) {
  return s.repeat(n);
};

// Problem 5: Reverse String
let solution = function (str) {
  return str.split("").reverse().join("");
};

// Problem 6: Positive Sum
let positiveSum = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
};
// Problem 7: Summation
let summation = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
};
// Problem 8: Boolean to String
let booleanToString = function (b) {
  return String(b);
};

// Problem 9: FizzBuzz
let fizzBuzz = function (n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
};
// Problem 10: Running Sum
let runningSum = function (nums) {
  let result = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }

  return result;
};
// Problem 11: Maximum Wealth
let maximumWealth = function (accounts) {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let total = 0;

    for (let j = 0; j < accounts[i].length; j++) {
      total += accounts[i][j];
    }

    if (total > maxWealth) {
      maxWealth = total;
    }
  }

  return maxWealth;
};
// Problem 12: Remove Duplicates
let removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
// Problem 13: Contains Duplicate
let containsDuplicate = function (nums) {
  let seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }

    seen.add(nums[i]);
  }

  return false;
};
// Problem 14: Move Zeroes
let moveZeroes = function (nums) {
  let position = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[position] = nums[i];
      position++;
    }
  }

  while (position < nums.length) {
    nums[position] = 0;
    position++;
  }
};
// Problem 15: Merge Sorted Array
let merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
  }
};
// Problem 16: Three Sum
let threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};
// Problem 17: Plus One
let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};
// Problem 18: Reverse String
let reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }

  return s;
};
// Problem 19: Length of Last Word

let lengthOfLastWord = function (s) {
  let trimmed = s.trim();
  let words = trimmed.split(/\s+/);

  return words[words.length - 1].length;
};
// Problem 20: Longest Common Prefix

let longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
};






const assert = require("node:assert/strict");

// Problem 1 tests
console.log("Problem 1: Staircase");
console.log(staircase(4));

assert.equal(staircase(4), "   #\n  ##\n ###\n####");
assert.equal(staircase(1), "#");
assert.equal(staircase(0), "");

console.log("Problem 1: PASSED!\n");

// Problem 2 tests
console.log("Problem 2: Grading Students");

console.log(gradingStudents([73, 67, 38, 33]));
console.log(gradingStudents([84, 29, 57]));

assert.deepEqual(
  gradingStudents([73, 67, 38, 33]),
  [75, 67, 40, 33]
);

assert.deepEqual(
  gradingStudents([84, 29, 57]),
  [85, 29, 57]
);

assert.deepEqual(gradingStudents([]), []);
assert.deepEqual(
  gradingStudents([37, 38, 39, 40]),
  [37, 40, 40, 40]
);

console.log("Problem 2: PASSED!");

// Problem 3: Time Conversion Tests
console.log("Problem 3: Time Conversion");

console.log('Input: "07:05:45PM"');
console.log("Output:", timeConversion("07:05:45PM"));

console.log('Input: "12:00:00AM"');
console.log("Output:", timeConversion("12:00:00AM"));

console.log('Input: "12:00:00PM"');
console.log("Output:", timeConversion("12:00:00PM"));

console.log('Input: "12:30:45PM"');
console.log("Output:", timeConversion("12:30:45PM"));

assert.equal(timeConversion("07:05:45PM"), "19:05:45");
assert.equal(timeConversion("12:00:00AM"), "00:00:00");
assert.equal(timeConversion("12:00:00PM"), "12:00:00");
assert.equal(timeConversion("12:30:45PM"), "12:30:45");
assert.equal(timeConversion("06:40:03AM"), "06:40:03");

console.log("Problem 3: PASSED!");
// Problem 4: Repeat String
console.log("Problem 4: Repeat String");

// Example 1
console.log('Input: n = 3, s = "ha"');
console.log('Output:', JSON.stringify(repeatStr(3, "ha")));

assert.equal(repeatStr(3, "ha"), "hahaha");

// Example 2
console.log('\nInput: n = 0, s = "hello"');
console.log('Output:', JSON.stringify(repeatStr(0, "hello")));

assert.equal(repeatStr(0, "hello"), "");

// Example 3
console.log('\nInput: n = 4, s = "a"');
console.log('Output:', JSON.stringify(repeatStr(4, "a")));

assert.equal(repeatStr(4, "a"), "aaaa");

console.log("\nProblem 4: PASSED!");
// Problem 5: Tests
console.log("Problem 5: Reverse String");

console.log('Input: "hello"');
console.log("Output:", JSON.stringify(solution("hello")));

console.log('\nInput: "world"');
console.log("Output:", JSON.stringify(solution("world")));

console.log('\nInput: "a"');
console.log("Output:", JSON.stringify(solution("a")));

assert.equal(solution("hello"), "olleh");
assert.equal(solution("world"), "dlrow");
assert.equal(solution("a"), "a");
assert.equal(solution(""), "");

console.log("\nProblem 5: PASSED!");

// Problem 6: Tests
console.log("Problem 6: Positive Sum");

console.log("Input:", JSON.stringify([1, -4, 7, 12]));
console.log("Output:", positiveSum([1, -4, 7, 12]));

assert.equal(positiveSum([1, -4, 7, 12]), 20);

console.log("\nInput:", JSON.stringify([-1, -2, -3]));
console.log("Output:", positiveSum([-1, -2, -3]));

assert.equal(positiveSum([-1, -2, -3]), 0);

console.log("\nInput:", JSON.stringify([5, 0, 10]));
console.log("Output:", positiveSum([5, 0, 10]));

assert.equal(positiveSum([5, 0, 10]), 15);
assert.equal(positiveSum([]), 0);

console.log("\nProblem 6: PASSED!");

// Problem 7: Tests
console.log("Problem 7: Summation");

console.log("Input: 2");
console.log("Output:", summation(2));
assert.equal(summation(2), 3);

console.log("\nInput: 8");
console.log("Output:", summation(8));
assert.equal(summation(8), 36);

console.log("\nInput: 1");
console.log("Output:", summation(1));
assert.equal(summation(1), 1);

assert.equal(summation(0), 0);

console.log("\nProblem 7: PASSED!");
// Problem 8: Tests
console.log("Problem 8: Boolean to String");

console.log("Input: true");
console.log("Output:", JSON.stringify(booleanToString(true)));
assert.equal(booleanToString(true), "true");

console.log('\nInput: false');
console.log("Output:", JSON.stringify(booleanToString(false)));
assert.equal(booleanToString(false), "false");

console.log("\nInput: Boolean value");
console.log("Output:", JSON.stringify(booleanToString(true)));

console.log("\nProblem 8: PASSED!");
// Problem 9: Tests
console.log("Problem 9: FizzBuzz");

console.log("Input: n = 5");
console.log("Output:", JSON.stringify(fizzBuzz(5)));

assert.deepEqual(
  fizzBuzz(5),
  [1, 2, "Fizz", 4, "Buzz"]
);

console.log("\nInput: n = 15");
console.log("Output:", JSON.stringify(fizzBuzz(15)));

assert.deepEqual(
  fizzBuzz(15),
  [
    1, 2, "Fizz", 4, "Buzz",
    "Fizz", 7, 8, "Fizz", "Buzz",
    11, "Fizz", 13, 14, "FizzBuzz"
  ]
);

assert.deepEqual(fizzBuzz(0), []);

console.log("\nProblem 9: PASSED!");
// Problem 10: Tests
console.log("Problem 10: Running Sum");

console.log("Input:", JSON.stringify([1, 2, 3, 4]));
console.log("Output:", JSON.stringify(runningSum([1, 2, 3, 4])));

assert.deepEqual(runningSum([1, 2, 3, 4]), [1, 3, 6, 10]);

console.log("\nInput:", JSON.stringify([1, 1, 1, 1, 1]));
console.log("Output:", JSON.stringify(runningSum([1, 1, 1, 1, 1])));

assert.deepEqual(runningSum([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5]);

console.log("\nInput:", JSON.stringify([3, 1, 2, 10, 1]));
console.log("Output:", JSON.stringify(runningSum([3, 1, 2, 10, 1])));

assert.deepEqual(runningSum([3, 1, 2, 10, 1]), [3, 4, 6, 16, 17]);

console.log("\nProblem 10: PASSED!");
// Problem 11: Tests
console.log("Problem 11: Maximum Wealth");

console.log("Input:", JSON.stringify([[1, 2, 3], [3, 2, 1]]));
console.log("Output:", maximumWealth([[1, 2, 3], [3, 2, 1]]));

assert.equal(maximumWealth([[1, 2, 3], [3, 2, 1]]), 6);

console.log("\nInput:", JSON.stringify([[1, 5], [7, 3], [3, 5]]));
console.log("Output:", maximumWealth([[1, 5], [7, 3], [3, 5]]));

assert.equal(maximumWealth([[1, 5], [7, 3], [3, 5]]), 10);

console.log("\nInput:", JSON.stringify([[2, 8, 7], [7, 1, 3], [1, 9, 5]]));
console.log("Output:", maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]));

assert.equal(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]), 17);

console.log("\nProblem 11: PASSED!");
// Problem 12: Tests
// Problem 12: Tests
console.log("Problem 12: Remove Duplicates");

let nums12a = [1, 1, 2];
let k12a = removeDuplicates(nums12a);

console.log("Input:", JSON.stringify([1, 1, 2]));
console.log("Output:", k12a);

assert.equal(k12a, 2);
assert.deepEqual(nums12a.slice(0, k12a), [1, 2]);

let nums12b = [0, 0, 1, 1, 2, 3, 3];
let k12b = removeDuplicates(nums12b);

console.log("\nOutput:", k12b);

assert.equal(k12b, 4);
assert.deepEqual(nums12b.slice(0, k12b), [0, 1, 2, 3]);

let nums12c = [];
let k12c = removeDuplicates(nums12c);

assert.equal(k12c, 0);

console.log("\nProblem 12: PASSED!");
// Problem 13: Tests
console.log("Problem 13: Contains Duplicate");

console.log("Input:", JSON.stringify([1, 2, 3, 1]));
console.log("Output:", containsDuplicate([1, 2, 3, 1]));

assert.equal(containsDuplicate([1, 2, 3, 1]), true);

console.log("\nInput:", JSON.stringify([1, 2, 3, 4]));
console.log("Output:", containsDuplicate([1, 2, 3, 4]));

assert.equal(containsDuplicate([1, 2, 3, 4]), false);

console.log("\nInput:", JSON.stringify([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(
  "Output:",
  containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
);

assert.equal(
  containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]),
  true
);

assert.equal(containsDuplicate([]), false);

console.log("\nProblem 13: PASSED!");
// Problem 14: Tests

console.log("Problem 14: Move Zeroes");

let nums14a = [0, 1, 0, 3, 12];

console.log("Input:", JSON.stringify(nums14a));

moveZeroes(nums14a);

console.log("Output:", JSON.stringify(nums14a));

assert.deepEqual(nums14a, [1, 3, 12, 0, 0]);

let nums14b = [0];
moveZeroes(nums14b);
assert.deepEqual(nums14b, [0]);

let nums14c = [1, 2, 3];
moveZeroes(nums14c);
assert.deepEqual(nums14c, [1, 2, 3]);

let nums14d = [];
moveZeroes(nums14d);
assert.deepEqual(nums14d, []);

console.log("\nProblem 14: PASSED!");
// Problem 15: Tests

 // Problem 15: Tests
console.log("Problem 15: Merge Sorted Array");

let nums15a = [1, 2, 3, 0, 0, 0];
let nums15b = [2, 5, 6];

console.log(
  "Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3"
);

merge(nums15a, 3, nums15b, 3);

console.log("Output:", JSON.stringify(nums15a));

assert.deepEqual(nums15a, [1, 2, 2, 3, 5, 6]);

// Test 2: nums2 is empty
let nums15c = [1];
merge(nums15c, 1, [], 0);
assert.deepEqual(nums15c, [1]);

// Test 3: nums1 has no initial elements
let nums15d = [0];
merge(nums15d, 0, [1], 1);
assert.deepEqual(nums15d, [1]);

console.log("\nProblem 15: PASSED!");

// Problem 16: Tests
console.log("Problem 16: Three Sum");

console.log("Input:", JSON.stringify([-1, 0, 1, 2, -1, -4]));
console.log("Output:", JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])));

assert.deepEqual(
  threeSum([-1, 0, 1, 2, -1, -4]),
  [[-1, -1, 2], [-1, 0, 1]]
);

console.log("\nInput:", JSON.stringify([0, 1, 1]));
console.log("Output:", JSON.stringify(threeSum([0, 1, 1])));

assert.deepEqual(threeSum([0, 1, 1]), []);

console.log("\nInput:", JSON.stringify([0, 0, 0]));
console.log("Output:", JSON.stringify(threeSum([0, 0, 0])));

assert.deepEqual(threeSum([0, 0, 0]), [[0, 0, 0]]);
assert.deepEqual(threeSum([]), []);

console.log("\nProblem 16: PASSED!");
// Problem 17: Tests
console.log("Problem 17: Plus One");

console.log("Input:", JSON.stringify([1, 2, 3]));
console.log("Output:", JSON.stringify(plusOne([1, 2, 3])));

assert.deepEqual(plusOne([1, 2, 3]), [1, 2, 4]);

console.log("\nInput:", JSON.stringify([4, 3, 9]));
console.log("Output:", JSON.stringify(plusOne([4, 3, 9])));

assert.deepEqual(plusOne([4, 3, 9]), [4, 4, 0]);

console.log("\nInput:", JSON.stringify([9, 9, 9]));
console.log("Output:", JSON.stringify(plusOne([9, 9, 9])));

assert.deepEqual(plusOne([9, 9, 9]), [1, 0, 0, 0]);

console.log("\nProblem 17: PASSED!");
// Problem 18: Tests
console.log("Problem 18: Reverse String");

let input1 = ["h", "e", "l", "l", "o"];
console.log("Input:", JSON.stringify(input1));

let output1 = reverseString(input1);

console.log("Output:", JSON.stringify(output1));

assert.deepEqual(output1, ["o", "l", "l", "e", "h"]);

let input2 = ["H", "a", "n", "n", "a", "h"];
console.log("\nInput:", JSON.stringify(input2));

let output2 = reverseString(input2);

console.log("Output:", JSON.stringify(output2));

assert.deepEqual(output2, ["h", "a", "n", "n", "a", "H"]);

console.log("\nProblem 18: PASSED!");
// Problem 19: Tests
// Problem 19: Tests
console.log("\nProblem 19: Length of Last Word");

let lastWordInput1 = "Hello World";
let lastWordOutput1 = lengthOfLastWord(lastWordInput1);

console.log("Input:", JSON.stringify(lastWordInput1));
console.log("Output:", lastWordOutput1);
assert.equal(lastWordOutput1, 5);

let lastWordInput2 = " fly me to the moon ";
let lastWordOutput2 = lengthOfLastWord(lastWordInput2);

console.log("\nInput:", JSON.stringify(lastWordInput2));
console.log("Output:", lastWordOutput2);
assert.equal(lastWordOutput2, 4);

let lastWordInput3 = "luffy is still joyboy";
let lastWordOutput3 = lengthOfLastWord(lastWordInput3);

console.log("\nInput:", JSON.stringify(lastWordInput3));
console.log("Output:", lastWordOutput3);
assert.equal(lastWordOutput3, 6);

console.log("\nProblem 19: PASSED!");
// Problem 20: Tests
console.log("\nProblem 20: Longest Common Prefix");

let prefixInput1 = ["flower", "flow", "flight"];
let prefixOutput1 = longestCommonPrefix(prefixInput1);

console.log("Input:", JSON.stringify(prefixInput1));
console.log("Output:", JSON.stringify(prefixOutput1));
assert.equal(prefixOutput1, "fl");

let prefixInput2 = ["dog", "racecar", "car"];
let prefixOutput2 = longestCommonPrefix(prefixInput2);

console.log("\nInput:", JSON.stringify(prefixInput2));
console.log("Output:", JSON.stringify(prefixOutput2));
assert.equal(prefixOutput2, "");

let prefixInput3 = ["interspecies", "interstellar", "interstate"];
let prefixOutput3 = longestCommonPrefix(prefixInput3);

console.log("\nInput:", JSON.stringify(prefixInput3));
console.log("Output:", JSON.stringify(prefixOutput3));
assert.equal(prefixOutput3, "inters");

console.log("\nProblem 20: PASSED!");
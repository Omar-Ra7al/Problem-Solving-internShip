/* Exercise 1: Filtering an Array

Problem: Write a function that takes an array of numbers
and returns a new array containing only the even
numbers
*/
const evenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultEx1 = evenArray.filter((num) => num % 2 === 0);
console.log("Even Array is:");

//___________________________________________________________________________

/* Exercise: 2 Find the Largest Number

Problem: Write a function that takes an array of numbers
and returns the largest number in the array
*/

const maxNumArr = [100, 10, 3, 8, 50, 10, 99, 1000];
// console.log("The maximum number is:", Math.max(...maxNumArr));

// const sortedArr = maxNumArr.sort((a, b) => a - b);
// console.log("The maximum number is:", sortedArr[sortedArr.length - 1]);

function maxNum() {
  let max = 0;
  for (let i = 1; i < maxNumArr.length; i++) {
    if (maxNumArr[i] > max) {
      max = maxNumArr[i];
    }
  }
  return max;
}

console.log("The maximum number is:", maxNum(maxNumArr));

//___________________________________________________________________________

/* Exercise: 3 Reverse a String

Problem: Write a function that takes a string as input and
returns the same string but reversed.
*/

function reverseString(str) {
  const arrOfStr = str.split("");
  let reversedStr = "";
  for (let i = arrOfStr.length - 1; i >= 0; i--) {
    reversedStr += arrOfStr[i];
  }
  return reversedStr;
}
console.log("Revrsed String is :", reverseString("lahaR ramO"));
//___________________________________________________________________________

/* Exercise: 4 Remove Duplicates

Problem: Write a function that takes an array of numbers
and returns a new array without duplicate numbers.
*/

/*
let duplicates = [1, 2, 1, 2, 3, 3, 5, 3, 4, 4, 5];
let newArray = [];
for (let i = 0; i < duplicates.length; i++) {
  if (!newArray.includes(duplicates[i])) {
    newArray.push(duplicates[i]);
  }
}
console.log(newArray);
*/

function removeDublicates(arr) {
  let newArray = [arr[0]];

  for (let i = 0; i < arr.length; i++) {
    // inside loop to set the vale gin every loop
    let isfound = false;
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === arr[i]) {
        isfound = true;
      }
    }
    // We push when it false onley
    if (!isfound) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

let duplicates = [1, 2, 1, 2, 3, 3, 5, 3, 4, 4, 5];
console.log(removeDublicates(duplicates));

/*
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
*/
document.querySelector("button.ex-1").addEventListener("click", () => {
  document.querySelector("span.ex-1").innerHTML = `[${resultEx1}]`;
});
document.querySelector("button.ex-2").addEventListener("click", () => {
  document.querySelector("span.ex-2").innerHTML = maxNum(maxNumArr);
});
document.querySelector("button.ex-3").addEventListener("click", () => {
  document.querySelector("span.ex-3").innerHTML = reverseString("lahaR ramO");
});
document.querySelector("button.ex-4").addEventListener("click", () => {
  document.querySelector("span.ex-4").innerHTML = `[${removeDublicates(
    duplicates
  )}]`;
});

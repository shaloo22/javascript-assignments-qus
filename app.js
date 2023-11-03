// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.
function checkNumber(num){
  if(num>0){
    console.log("The number is positive");
  }else if(num<0){
    console.log("The number is negative");
  }else{
    console.log("The number is zero");
  }
}
checkNumber(3) //The number is positive
checkNumber(-1) //The number is negative
checkNumber(0) // The number is zero

// Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop.
// The factorial of a number N is the product of all positive integers less than or equal to N.

function factorialNum(num){
  let factorial =1;
  for (let i = 1; i <=num; i++) {
     factorial *=i;
  }
  return factorial;
}
let result = factorialNum(5);
console.log('factorial num is',result); // output factorial num is 120

//Write a JavaScript function that takes two numbers as parameters and returns the larger one.
 const largerNum = (num1,num2)=> {
  if(num1>num2){
      return num1
  }else{
    return num2
  }
 }
 const Number = largerNum(5,10);
 console.log(Number);

 //Assignment 4:
//javaScript function that takes a string as a parameter and determines whether it's a palindrome or not. 
//A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
const checkPalindrom = (str)=>{
  let formattedStr = str.replace().toLowerCase();
  let reveredStr = formattedStr.split("").reverse().join("");

  if(formattedStr===reveredStr){
    return true;
  }else{
    return false;
  }
}

let result2 = checkPalindrom('dad')
console.log(result2); //true

//Assignment 5:
// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. 
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.


const printPrime = (num)=>{
  for (let i = 0; i <= num; i++) {
   let isPrime = true;
   for (let j = 2; j < i; j++) {
    if(i % j == 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    console.log(i);
  }
}
}
printPrime(5); // 0 1 2 3 5
  
//Assignment 6:
// Write a JavaScript function that simulates a simple calculator. 
//The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.

function calculate( num1, num2, operator){
  let result3;

switch(operator){
  case "+":
    result3 = num1 + num2;
    break;

    case "-":
      result3 = num1 - num2;
      break;

      case "*":
    result3 = num1 * num2;
    break;

    case "/":
    result3 = num1 / num2;
    break;

    default:
      return "Invalid operator"
}

return result3
}
let num1 = 4;
let num2 = 3;
let operator = "-";
let result3 = calculate(num1, num2,operator);
console.log((result3)); // output 1

//Assignment 7:
// Write a JavaScript function that takes a string as a parameter and counts the number of vowels
//  (a, e, i, o, u) in the string.

function countVowels(str){
  let count = 0;
  const vowels = ['a','e','i','o','u']

  for(let char of str.toLowerCase()){
    if(vowels.includes(char)){
      count++
    }
  }
  return count;
}

let vowelCount = countVowels("Hey, Who are you?");
console.log(vowelCount);

// //Assignment 8:
// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. 
// A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.

function isPerfectNumber(num){
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    if(num % i === 0){
      sum +=  i;
    }
  }

  return sum === num;
}

let num = 22;
let isPerfect = isPerfectNumber(num);

if(isPerfect){
  console.log(num + " is a perfect number");
}else{
  console.log(num + " is not a perfect number"); //output 22 is not a perfect number
}

// //Assignment 9:
// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. 
//The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.

function fibonacciSeries(num){
    let fibSeries = [0,1];

    for( let i = 2; fibSeries[i-1]<= num; i++){
      fibSeries[i] = fibSeries[i-1]+fibSeries[i-2];
    }

    console.log(fibSeries.join(","));
}
let num = 100;
fibonacciSeries(num); //output 0,1,1,2,3,5,8,13,21,34,55,89,144

//Assignment 10:
// Write a JavaScript function that takes a positive integer as
//  a parameter and prints its multiplication table up to 10.

function multiplicationTable(num){
  for( let i = 1; i<=10;i++){
    let result4 = num * i;
    console.log(`${num}x${i}=${result4}`);
  }
}

multiplicationTable(5); //output 5x1=5 
//5x1=5 
// 5x2=10 
// 5x3=15 
// 5x4=20 
// 5x5=25 
// 5x6=30 
// 5x7=35 
// 5x8=40
// 5x9=45 
// 5x10=50
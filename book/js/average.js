function average (Score1, Score2, Score3)
{
    const average = (Score1 + Score2 + Score3) / 3;
    console.log(average);
}
average(45,56,78);

const personA = {
    firstName: 'Monique',
    likes: 'pizza'
};
const personB = {...personA}; //spread operator

console.log("Before");
console.log(personA.firstName);
console.log(personB.firstName);

personA.firstName = "Stacy";

console.log("After");
console.log(personA.firstName);
console.log(personB.firstName);

var a = 85; // assigning 85 to "a" or declaration
var b = 5;

let add = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulus = a % b;
let exponentiation = a ** b;
let increment = a++; 

let decrement = b--;

console.log("Addition of a and b is: " + add);
console.log("Subtraction of a and b is: " + subtraction);
console.log("Multiplication of a and b is: " + multiplication);
console.log("Division of a and b is: " + division);
console.log("The remainder of a modulus b is: " + modulus);
console.log("Exponentiation of a and b is:" + exponentiation);
console.log("The increment of a is: " + a++);
console.log("The decrement of b is: " + b--);

const apples = "apples";
const oranges = "oranges";

const isEqual = apples === oranges;

const isNotEqual = apples !== oranges;

console.log("Are apples and oranges the same?" + isEqual);
console.log("Apples and oranges are not the same: " + isNotEqual);

const volunteers = 20;
const students = 24;
const pizzas = 25;

const moreStudents = students > volunteers ;
console.log("Are there more students than volunteers " + moreStudents);

const lessStudents = students < pizzas ;
console.log("Are there fewer students than pizzas " + lessStudents);

const enoughPizzas = volunteers + students < pizzas;
console.log("Is there enough pizza " + enoughPizzas);


const myAge = 23;
const drivingAge = 17;
const canDrive = myAge >= drivingAge;
console.log("Am I above the driving age?" + canDrive);

if (myAge >= drivingAge) {
    console.log ("You are eligible to drive!");
}
else{
    console.log("You are not eligible to drive")
}
// ternary operator
myAge >= drivingAge
  ? console.log("You are eligible to drive")
  : console.log("You are not eligible to drive");

  const grade = 75
  if (grade > 90){
    console.log("A+")
  } else if ( grade>80  && grade<=90 ) {
    console.log("A")
  } else if (grade>70 && grade<=80 ) {
    console.log("B")
  } else if (grade>60 && grade<=70) {
    console.log("C")  
  } else if ( grade>50 && grade <=60 ) {
    console.log("D")
  } else if ( grade>40 && grade <=50 ) {
    console.log("E")
  } else {
        console.log("F")
  }

  const score = 75;

if (score > 90) {
  console.log("A");
} else if (score > 80) {
  console.log("A");
} else if (score > 70) {
  console.log("B");
} else if (score > 60) {
  console.log("C");
} else if (score > 50) {
  console.log("D");
} else if (score > 40) {
  console.log("E");
} else {
  console.log("F");
}

// get the day of the week (0 - 6)
let dayNumber = new Date().getDay(); // 3
console.log(new Date());
switch (dayNumber) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Unknown value");
}
let shoeNumber = 1;
let limit = 5; // maximum

while (shoeNumber <= limit) {
    console.log (shoeNumber);
    shoeNumber = shoeNumber + 1; // increment
}

let i = 1;
let total = 0;

while (i <= 10) {
    total = i;
    i+= 1;
}
console.log('Total:' + total);

let count = 1;
while (count< 10){
  console.log (count + ":" + Math.random().toFixed(2));
count += 1;
}

//for loop
for(let count=1; count <10; count += 1){
  console.log(count + ":" + Math.random().toFixed(2));
}

//for loop for shoe size
for ( let shoeNumber = 1; shoeNumber <= limit; shoeNumber += 1){
  console.log (shoeNumber);
}

//for(shoeNumber=1; shoeNumber<5; shoeNumber++) {
 // console.log(shoeNumber);
//}
/*
  They are all increasing shoeNumber by 1
  shoeNumber++
  shoeNumber+=1
  shoeNumber=shoeNumber +1
*/

const animals = [ 'dog', 'cat', 'monkey', 'lion'];
const personArray = ['Shakirat', , 'Jahou' ,'John Doe', 'Micheal Mike' ];
const ArrayOfEvenNumbers = ['2', '4','6','8'];

console.log(animals[2]);
console.log(animals[animals.length - 1]); // last item in an array
console.log(animals.length);

//const animals = ["dog", "cat", "horse", "sheep"];
//console.log(animals[0]) // first item in an array
//console.log(animals[animals.length - 1]); // last item in an array
//console.log(animals.length);

for (let i=0; i<animals.length; i++) {
  console.log(animals[i]);
}

/*
i= 0
animals.length = 4
0<4 - true
// dog - first iteration

i=1
1<4 - true
//cat - second iteration

i=2
2<4 - true
//horse - third iteration

i=3
3<4 - true
//sheep - fourth iteration

i=4
4<4 - false
The fifth iteration results in false, the loops stop
*/

//add new element in an array
animals.push ("zebra");
console.log(animals);

animals.unshift("lion");
console.log(animals);

//remove elements in an array
animals.pop(); //removes the last element of an array
console.log(animals);

animals.shift(); //remove the first element
console.log(animals);

console.log(animals.sort()); // sorts it in alphabetical order
console.log(animals.sort().reverse());

const numbers = [1, 5, 3, 19, 17, 2000, 8];
console.log(numbers.sort());

function sortNumbersAscending(a,b) {
    return a - b;
}
console.log(numbers.sort(sortNumbersAscending));

// 1 and 5, return -4  => [1, 5, 3, 19, 20, 45, 6]
// 5 and 3, return 2 => [1, 3, 5, 19, 20, 45, 6]
// 5 and 19, return -14 => [1, 3, 5, 19, 20, 45, 6]
// 19 and 20, return -1 => [1, 3, 5, 19, 20, 45, 6]
// 20 and 45, return -25 => [1, 3, 5, 19, 20, 45, 6]
// 45 and 6, return 31 => [1, 3, 5, 19, 20, 6, 45]
//[1, 3, 5, 19, 6, 20, 45]
//[1, 3, 5, 6, 19, 20, 45]

//sort in descending order

console.log(numbers.sort(sortNumbersAscending).reverse());

const fruitAndVeg = [
  "apple",
  "orange",
  "banana",
  "kiwi",
  "avocado",
  "celery",
  "aubergine",
];
console.log(fruitAndVeg);

const noAvocados_2 = fruitAndVeg.filter((fruit) => !fruit.includes("avocado"));
console.log(noAvocados_2);


// map method
const arrayOfRandomNumbers = [3, 7, 80, 20, 2];
console.log(arrayOfRandomNumbers);

const numbersDoubled = arrayOfRandomNumbers.map((num) => num * 2);
console.log(numbersDoubled);

// chaining methods
const numbersDoubledAndGreaterThan10 = arrayOfRandomNumbers
  .map((num) => num * 2)
  .filter((num) => num > 10);

console.log(numbersDoubledAndGreaterThan10);
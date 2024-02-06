//Task 1
function sumOfEvenIndices(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i += 2) {
      sum += numbers[i];
      console.log(numbers[i]);
    }
  
    return sum;
  }
  const numbersArray = [2, 4, 6, 7, 8, 9];
  console.log("Sum of Even Indices:", sumOfEvenIndices(numbersArray));
  
//Task 2
  function countOccurrences(numbers, target) {
    let count = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === target) {
        count++;
      }
    }
  
    return count;
  }
  const targetNumber = 3;
  console.log("Occurences:", countOccurrences(numbersArray, targetNumber));



  
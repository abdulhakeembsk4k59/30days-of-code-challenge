function isPrime(num) {
    if (num <= 1) {
      return false; // 1 and numbers less than 1 are not prime
    }
    if (num <= 3) {
      return true; // 2 and 3 are prime
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false; // Numbers divisible by 2 or 3 are not prime
    }
  
    // Check for prime by iterating from 5 to the square root of num
    for (let i = 5; i * i <= (num/2); i++) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false; // If divisible by any number in this range, it's not prime
      }
    }
  
    return true; // If no divisors are found, it's prime
  }
  
  function findPrimeNumbersInArray(arr) {
    const primeNumbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        primeNumbers.push(arr[i]);
      }
    }
  
    return primeNumbers;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbers = findPrimeNumbersInArray(numbers);
  console.log("Prime numbers in the array:", primeNumbers);
  
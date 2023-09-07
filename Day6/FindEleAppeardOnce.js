function findUniqueElement(arr) {
    if (arr.length === 0) {
        return null; // Handle empty array case
    }

    let uniqueElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
        uniqueElement ^= arr[i];
    }

    return uniqueElement;
}

// Example usage:
const sortedArray = [1, 1, 2, 2, 3, 3, 4, 4, 5];
const uniqueElement = findUniqueElement(sortedArray);

console.log(`The element appeared once is: ${uniqueElement}`); // Output : 5

// Finding Missing Numbers compared to two arrays

function findMissingNumbers(arr1, arr2) {
    const missedNums = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            missedNums.push(arr1[i]);
        }
    }

    return missedNums;
}

const A = [0, 1, 2, 3, 6, 4, 5, 10, 11];
const B = [6, 2, 3, 1, 0, 12];

const missingNumbersA = findMissingNumbers(B, A);
const missingNumbersB = findMissingNumbers(A, B);
console.log("Missing numbers in A:", missingNumbersA); // Missing in A Output : 12
console.log("Missing numbers in B:", missingNumbersB); // Missing in B output : 4, 5, 10, 11
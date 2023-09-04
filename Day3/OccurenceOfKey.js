const array = [1, 2, 2, 3, 4, 4, 5];
const keyToCount = 5;

let count = 0;

for (const element of array) {
  if (element === keyToCount) {
    count++;
  }
}

console.log(`The key ${keyToCount} occurs ${count} times.`);

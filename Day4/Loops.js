

// Normal For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}



// Foreach Loop
let fruits = ["apple", "banana", "grape"];
fruits.forEach(function (fruit) {
    console.log(fruit);
});


// js iterable loop
let iterable = [1, 2, 3];
for (let element of iterable) {
    console.log(element);
}

let person = { name: "Raji", age: 130 };

// Loopin through key in js
for (let key in person) {
    console.log(key + ": " + person[key]);
}

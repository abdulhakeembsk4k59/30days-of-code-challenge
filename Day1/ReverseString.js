// fuction to reverse the string
function reverseString(str) {

    // split the string to array elements
    const arrElements = str.split("");
   
    // it just reverse the array elments
    const rvElements = arrElements.reverse();
 
    // join all elements of the array into a string
    const reversedArray = rvElements.join("");
    
    // return the reversed string
    return reversedArray;
}
 
const string = "Hakeem is Good Boy";
// cpassing the string to reverseString() and storing result in res
const res = reverseString(string); 
console.log(res);
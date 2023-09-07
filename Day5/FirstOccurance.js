let arr = [2,41,1,5,2,5,71];
let key = 5;
for(var i=0;i<arr.length;i++){
    if(arr[i] == key){
        console.log(key,"found at index",i);
        break;
    }
}
if(i==arr.length)
console.log("Key not found in the array");
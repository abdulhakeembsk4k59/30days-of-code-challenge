let k = 50;
let arr = [10, 5, -3, 50, -100];

let flag = 0;

for(i=0;i<arr.length;i++){
    if(arr[i] == k){
        flag = 1;
        break;
    }
}

if(flag == 1){
    console.log("Element Found at "+(i+1)+"th position in the array");
}
else{
    console.log("Element not found");
}


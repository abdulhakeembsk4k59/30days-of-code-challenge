let arr = [10, 5, -3, 50, -100];

let min = arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min = arr[i];
    }
}
console.log(min);


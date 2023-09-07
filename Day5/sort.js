let arr = [5,41,1,2,71];
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
for(var i=0; i<arr.length;i++){
    console.log(arr[i]);
}
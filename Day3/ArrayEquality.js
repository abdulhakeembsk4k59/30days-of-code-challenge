// initializing arrays
let arr1 = [40, 60, 70, 80, 90];
let arr2 = [40, 60, 70, 80, 90];

let check = false;

if(arr1.length == arr2.length){
    for(let i = 0; i<arr1.length; i++){
        if(arr1[i]===arr2[i]){
            check = true;
        }else{
            check = false;
        }
    }
}

if(check){
    console.log("Both arrays are equal");
}else{
    console.log("Both are not same!")
}
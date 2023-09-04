const ar = [10, 20, 20, 10, 10,30, 30, 50, 10, 20];

let du_ar = [];

for(let i = 0; i<ar.length; i++){
    for(let j = i+1; j<ar.length; j++){
        if(ar[i] == ar[j]){
            du_ar.push(ar[i]);
        }
    }
}

const uniqueArray = [...new Set(du_ar)];

console.log(uniqueArray); // [1, 2, 3, 4, 5]

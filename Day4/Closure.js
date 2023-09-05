function outer(){
    let outerVar = "This is Hakeem";
    function inner(){
        console.log(outerVar);  // Inner function can access outer variable
    }
    return inner;
}

let closureFunc = outer();

closureFunc(); // output's This is Hakeem
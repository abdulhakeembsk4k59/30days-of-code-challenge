Advanced Working with Functions
A function is a block of organized, reusable code that is used to perform single, related action. Some of the advanced working with functions include:

Recursion
Closure
The “new Function”
Arrow Functions
Rest Parameters & Spread Operator
Global Object
Function Object
SetTimeOut & SetInterval
Function Binding
 

Recursion
Recursion is a programming pattern that helps in situations where a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action and a simpler variant of the same task.

recursion - advanced javascript tutorial - edureka

In the process of solving a task, a function can call many other functions. A partial case of this is when a function calls itself. Thus, it is known as recursion.

Example:

1
2
3
4
5
6
7
8
9
function pow(x, n) {
if (n == 1) {
return x;
} else {
return x * pow(x, n - 1);
}
}
 
alert( pow(2, 4) ); // 16
In the above example, the recursive function simplifies the task and calls itself.

 

Closure
JavaScript is a function-oriented language. You can create a function dynamically, copy to another variable or pass as an argument to another function and call from a totally different place later.

A closure is a function that remembers its outer variables and can access them. In some languages, it is not possible, or a function should be written in a special way to make it happen. But in JavaScript, all functions are naturally closures.

Example:

1
2
3
4
5
6
7
8
9
var add = (function () {
var counter = 0;
return function () {counter += 1; return counter}
})();
 
add();
add();
 
// the counter is now 2
 

The “new Function”
The “new function” syntax is another way to create a function. It’s rarely used, but sometimes there’s no alternative.

Syntax:

1
let func = new Function ([arg1, arg2, ...argN], functionBody);
The function consists of the arguments arg1…argN and the given functionBody.

Example:

1
2
let sum = new Function('a', 'b', 'return a + b');
alert( sum(1, 2) ); // 3
Here, the function is created literally from a string, that is passed at run time. You need to write the function code in the script. But “new Function” allows turning any string into a function.

 

Arrow Functions
Arrow functions are anonymous and change the way this binds in functions. It makes our code more concise and simplifies function scoping and this keyword.



But arrow functions are not just a shorthand for writing small stuff. They also have some very specific and useful features. JavaScript consists of situations where you need to write a small function which is executed somewhere else, such as:

Course Curriculum
Full Stack Web Developer Masters Program Course
arr.forEach(func) – func is executed by forEach for every array item.
setTimeout(func) – func is executed by the built-in scheduler.
And in such functions, we usually don’t want to leave the current context. That’s where arrow functions come in handy.

Example:

1
2
3
4
5
6
7
8
//Arrow Function:
hello = () => {
document.getElementById("demo").innerHTML += this;
}
//The window object calls the function:
window.addEventListener("load", hello);
//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
 

Rest Parameters & Spread Operator
Many JavaScript built-in functions support an arbitrary number of arguments such as:

Math.max(arg1, arg2, …, argN) – returns the greatest of the arguments.

Object.assign(dest, src1, …, srcN) – copies properties from src1..N into dest

Rest parameter is an improved way of handling function parameter, allowing us to more easily handle various input as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

Example:

1
2
3
4
5
6
7
8
9
10
11
// es6 rest parameter
function fun(...input){
let sum = 0;
for(let i of input){
sum+=i;
}
return sum;
}
console.log(fun(1,2)); //3
console.log(fun(1,2,4)); //4
console.log(fun(1,2,4,6)); //13
Spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in variable array where there is more than 1 values are expected. It allows us the privilege to obtain a list of parameters from an array.

Example:

1
2
3
4
5
6
// spread operator doing the concat job
let arr = [1,2,3];
let arr2 = [4,5,6];
 
arr = [...arr,...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5,6 ]
 

Global Object
The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment. Recently, globalThis was added to the language, as a standardized name for a global object, that should be supported across all environments.

All properties of the global object can be accessed directly:

1
2
3
alert("Hello");
// is the same as
window.alert("Hello");
 

Function Object
In JavaScript, functions are objects. The different properties include:

name – the function name. Usually taken from the function definition, but if there’s none, JavaScript tries to guess it from the context (e.g. an assignment).

length – the number of arguments in the function definition. Rest parameters are not counted.

If the function is declared as a Function Expression, and it carries the name, then it is called a Named Function Expression. The name can be used inside to reference itself, for recursive calls or such.

Example:

1
2
3
4
5
6
7
8
9
function sayHi() {
alert("Hi");
}
 
alert(sayHi.name); // sayHi
function f2(a, b) {}
function many(a, b, ...more) {}
alert(f2.length); // 2
alert(many.length); // 2
 

SetTimeOut & SetInterval
If you want to execute a function at a certain time later, it is called as scheduling a call. There are two methods for it:



setTimeout allows us to run a function once after the interval of time.

setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

These methods are not a part of the JavaScript specification. But most environments have an internal scheduler and provide these methods.

setTimeout

Syntax:

1
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
Example:

1
2
3
4
5
function sayHi() {
alert('Hello');
}
 
setTimeout(sayHi, 1000);
setInterval

Syntax:

1
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
Example:

[/javascript]//repeat with the interval of 2 seconds
let timerId = setInterval(() => alert(‘tick’), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert(‘stop’); }, 5000);[/javascript]

 

Function Binding
When passing object methods as callbacks, for instance to setTimeout, there’s a known problem of “losing this”. Functions provide a built-in method bind that allows fixing this.

Syntax:

1
2
// more complex syntax will come a little later
let boundFunc = func.bind(context);
The result of func.bind(context) is a special function-like “exotic object”, that is callable as function and transparently passes the call to func setting this=context.

Example:

1
2
3
4
5
6
7
8
9
10
let user = {
firstName: "John"
};
 
function func() {
alert(this.firstName);
}
 
let funcUser = func.bind(user);
funcUser(); // John
 

These were some of the examples of advanced working with functions. Now, let’s move on with this advanced JavaScript Tutorial and learn about namespaces.

Programming & Frameworks Training
 

JavaScript Namespaces
JavaScript does not support namespaces. But the namespaces are important as they help reduce the number of identifiers for variables, objects, and functions that are added to the global scope in your application. JavaScript is a flexible language and there are ways to work around this limitation and implement your own namespaces.

So why do we need namespaces? In JavaScript, the codes share a single global namespace which is simply a single global object that holds all global variables and functions as properties. In the browser, this is the window object which tends to pollute the global scope if there are too many objects.

Example:

1
2
3
4
5
6
7
8
let num = 5;
var obj = {};
var str = "Hello Edureka!";
function sum(x, y){
total = x + y;
return total;
}
numr = sum(3,3);
In the above example, the identifiers num, obj, str, and sum are properly declared using the var and let keyword. But the function scoped variable total is missing a var and numr is a misspelling of num. Here, JavaScript adds both total and numr to the global name space, which most likely is not what you want.

 

Advanced JavaScript Tutorial: Prototypes
In JavaScript, objects have a special hidden property known as Prototype which depicts either null or references another object. Now, that object is called a prototype. In this advanced JavaScript Tutorial, we will discuss two important features of prototype:

Prototypal Inheritance
Prototype methods, objects without __proto__
 

Prototypal Inheritance
In programming, we often want to take something and extend it. Suppose, you have a user object with its properties and methods and you want to make admin and guest as slightly modified variants of it. Here, you want to reuse what is there in the user, not copy its methods, just build a new object on top of it.

Prototypal inheritance is a language feature that helps in that.

Example:

1
2
3
4
5
6
7
8
9
10
11
12
let pet = {
eats: true
};
let dog = {
jumps: true
};
 
dog.__proto__ = pet; // (*)
 
// we can find both properties in dog now:
alert( dog.eats ); // true (**)
alert( dog.jumps ); // true
Here, if you are looking for a property in dog, and it’s missing, JavaScript automatically takes it from pet.

 

Prototype methods, objects without __proto__
In prototypal inheritance, we used __proto__ but this is an outdated method now. In this advanced JavaScript Tutorial, we will have a look at the modern methods to set up a prototype:

Object.create(proto[, descriptors]) – It creates an empty object with given proto as [[Prototype]] and optional property descriptors.

Object.getPrototypeOf(obj) – This returns the [[Prototype]] of obj.

Object.setPrototypeOf(obj, proto) – This method sets the [[Prototype]] of obj to proto.

Example:

1
2
3
4
5
6
7
8
9
10
11
12
let pet = {
eats: true
};
 
// create a new object with pet as a prototype
let dog = Object.create(pet);
 
alert(dog.eats); // true
 
alert(Object.getPrototypeOf(dog) === pet); // true
 
Object.setPrototypeOf(dog, {}); // change the prototype of dog to {}
Now let’s move ahead with this advanced JavaScript Tutorial and learn about error handling.

 

Error Handling
No matter how good you are at programming, your scripts might consist of errors. They may occur because of our mistakes, unexpected user input, an erroneous server response, or any other reason.

Usually, a script stops immediately in case of an error, printing it to console. Now, there’s a syntax construct try..catch that allows catching errors and, instead of dying, do something more reasonable.

 

The Try..Catch Syntax
The try..catch construct has two main blocks:

Try
Catch
1
2
3
4
5
6
7
8
9
try {
 
// code...
 
} catch (err) {
 
// error handling
 
}
First, the code in try {…} is executed.

If there are no errors, then catch(err) is ignored. The execution reaches the end of try and goes on, skipping catch.

If an error occurs, then try execution is stopped, and the control flows to the beginning of catch(err).

Example:

1
2
3
4
5
6
7
try {
alert('Begin try runs'); // (1) <--
// ...no errors here
alert('End try runs'); // (2) <--
} catch(err) {
alert('Catch is ignored as there are no errors'); // (3)
}
The next aspect of this advanced JavaScript tutorial is about the modules in JavaScript.

 

Modules in JavaScript
A module is a self-contained piece of code that groups semantically-related variables and functions. Modules are not built-in constructs in JavaScript. But the JavaScript Module Pattern provides a way to create modules that have well-defined interfaces that are exposed to clients of the module.

An important advantage of modules is that you can modify the internal functionality whenever necessary without affecting the rest of your program. This promotes encapsulation and information hiding. To define a module in JavaScript, you take advantage of anonymous closures by creating an anonymous immediate function.

Example:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
var MODULE = (function () {
var module = {};
var privateVariable = 7;
 
function privateMethod() {
// ..
}
 
module.moduleProperty = 1;
module.moduleMethod = function () {
// ...
};
return module;
}());
Now let’s move ahead with this advance JavaScript Tutorial and learn about chaining JavaScript Methods.

 

Chaining JavaScript Methods
JavaScript allows you to invoke multiple methods on an object in a single expression. To invoke multiple methods, we have chaining. Chaining is a process of stringing the method calls together with dots between them.

Syntax:

1
object.method1().method2().method3();
When building a chain, the object is named only once and then multiple methods are called on it. For this to work, your methods must return the object that they operate on. Each method works on the object and when it is done it returns it to the next call.

Example:

Course Curriculum
Full Stack Web Developer Masters Program Course
Weekday / Weekend Batches
1
account.number("11324567").setBalance(15000).applyCredit(200);
In the above example, you learn to set a banking account which consists of the account number, the balance, and a line of credit.

Chaining in JavaScript can improve performance as well as readability. Here, the jQuery library uses chaining extensively. Let’s take an example and see how to chain jQuery selector methods:

$("#myDiv").removeClass("off").addClass("on").css("background": "red");

Now let’s move ahead with this advanced JavaScript Tutorial and understand what are generators.

 

Generators
Generators are a special class of functions that simplify the task of writing iterators. So, this function produces a sequence of results instead of a single value and generates ​a series of values.

Thus, in JavaScript, a generator is a function that returns an object on which you can call next(). Therefore, every invocation of next() will return an object of shape.

Example:

1
2
3
4
{
value: Any,
done: true|false
}
The value property will contain the value. The done property is either true or false. When the done becomes true, the generator stops and won’t generate any more values.

So these were some of the advanced techniques and methods involved in JavaScript. Thus, with this, we have come to the end of our Advanced JavaScript Tutorial. I hope you understood the concepts of advanced JavaScript.



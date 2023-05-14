'use strict';

// JAVASCRIPT is a:
// - high-level
// - garbage-collected
// - Interpreted or Just in time Compiled
// - multi-paradigm :- Three Optimal paradigms are;
// - Procedural Programming
// - Object Oriented Programming (OOP)
// - Functional Programming (FP)
// - prototype based object oriented
// - first class functions i.e functions are simply treated as variables
// - dynamic
// - single-threaded
// - non-blocking event loop

// CONCURRENCY MODEL basically means how the javascript engine handles multiple tasks happening at the same time.The reason we use this model is bcuz js in single threaded.
// It is done using event loops i.e taking long running tasks, execute them in the background, and puts them back in the thread once they are finished.

// JAVASCRIPT ENGINE AND RUNTIME ENVIRONMENT
// The js engine is simply a program that executes javascript code. e.g the V8 engine of Google Chrome. Every Js engine contains a CALL-STACK and a HEAP.

// The Callstack is where our codes are executed using EXECUTION CONTEXT. While the heap is an unstructured memory pool that stores all the objects that javascript needs.

// Difference between COMPILATION and INTERPRETATION
// In compilation, the entire source code is converted into machine code at once, and written to a binary file that can be executed by a computer.
// In interpretation, the interpreter runs the src code and executes it line by line. they are much more slower than the compilation method

// Modern javascript makes use of a mixed version of the interpretation and compilation method, it is called JUST-IN-TIME COMPILATION
//  JUST-IN-TIME COMPILATION convertes the entire code into machine code at once then executes it IMMEDIATELY.

// AST stands for Abstract Syntax Tree ; It has nothing to do with the DOM Tree.
// It's just a representation of our entire code inside the engine.

// MODERN JUST-IN-TIME COMPILATION OF JAVASCRIPT
// - Parsing ; javascript essentially reads the code and parses it into what we call an AST
// - Compilation
// - Execution (It happens in the callstack).

// In modern javascript, the code is always been continually optimized, usually during the execution phase after the code has been compiled.

// JAVASCRIPT RUNTIME IN THE BROWSER
// - contains the JS Engine,
// - contains the Web APIs. They are functionalities provided to the engine by the browser but are not javascript objects fundamentally. JS accesses them with the global window objrct.
// - contains the CallBack Queue. It contains all the callback functions that are ready to be executed.

// The EVENT LOOP takes callback functions from the callback queue and inserts them into the CALLSTACK in order to be executed.

// JAVASCRIPT RUNTIME IN NODE.JS
// It's quite similar to that of the browsers except that it doesn't contain APIs as they are provided by the browsers. Instead, it contains many C++ bindings and thread pool.

// HOW JS IS EXECUTED IN THE CALLSTACK

// -A global execution context is created for top-level code i.e code that aren't in any functions. There is only one GLOBAL EXECUTION CONTEXT
// An execution context is an environment where a piece of javascript is executed. It stores all the necessary information for some code to be executed.

// After codes in the global EC has been executed, js executes functions and it waits for callbacks.
// - For each function call, an execution context is created containing all the informations necessary in running that function.

// All these execution contexts together makes up the callstack.
// After all the functions has been executed, js waits for callback functions which are provided by the EVENT LOOP from the MESSAGE QUEUE.

// WHAT'S INSIDE THE EXECUTION CONTEXT
// - contains the VARIABLE ENVIRONMENT (var declararions, functions, argument objects)
// - contains the SCOPE CHAIN which consists of referencesto variables locared outside of the current function
// - contains the 'this keyword'

// All these are generated during the 'creation phase' right before execution.
// Note that Execution Constexts belonging to Arrow Functions do not contain the 'argument object' as well as the 'this keyword', instead they use it from their closest function parent

// WHAT IS THE CALLSTACK
// It is a place where the execution context gets stacked on top of each other, to keep track of where we are in the execution.
// After each context is executed, it gets taken of the stack and runs the previous code above it.

// SCOPING AND SCOPE IN JAVASCRIPT
// Scoping controls how our program's variables are organized and accessed.
// Lexical Scoping refers to the type of scoping that is controlled by placement of functions and blocks in the code.
// SCOPE is the space or environmentt in which a certain variable is declared. There is global scope, function scope and block scope.
// The Scope of a Variable is the entire Region of our code where a certain variable can be accessed

// THE 3 TYPES OF SCOPES
// - GLOBAL SCOPE: This scope is for variables that are declared outside any funtion or block. Variables declared in the global scope are accessible everywhere.
// - FUNTION SCOPE: This scope is for variables that are accessible only inside a function, NOT outside it. It is also called LOCAL SCOPE.
// - BLOCK SCOPE (ES6): This scope is for variables that are accessible only in a block (block scoped), HOWEVER, this only applies to let and const variables. Functions are also block scoped but only in restrict mode. This only applies to let and const, the var method of declaring varibles isn't scoped to the block scope.

// THE SCOPE CHAIN
// Basically this is the relationships between scopes and how variables in each scopes are accessed bwtween one another. It is important to note that in the scope-chain, VARIABLE LOOKUP only occurs i.e inner scopes can access variables in outer or parent scopes and not the other way around.

// DIFFERENCES BETWEEN THE SCOPE CHAIN AND EXECUTION STACK.
// The scope-chain has nothing to do with the order in which functions are called in the Execution Context.

// SCOPING IN PRACTICE

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function PrintAge() {
//     let output = `${firstName}, you are ${age} years old, born in the year ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'olamide';

//       //   Reassigning outer scope's variable
//       output = 'NEW OUTPUT';

//       const str = `Oh , and you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(output);
//   }
//   PrintAge();
//   return age;
// }

// const firstName = 'Lancer';
// calcAge(1991);

// HOISTING AND TDZ in Practice

// HOISTING IN VARIABLES

// console.log(me);
// console.log(job);
// console.log(year);

var me = 'lancer';
let job = 'Web Developer';
const year = 2004;

// HOISTING IN FUNCTIONS
// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArr(2,3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArr = (a, b) => a + b;

// NOTE THAT: Function expressions or Arrow Functions declared with var are hoisted as UNDEFINED, these kind of expressions can only be called or written using the 'let' and 'const' variable.

// Example

const numProducts = 10;
if (!numProducts) delShoppingCart();

function delShoppingCart() {
  console.log('All product deleted!');
}

var x = 1;
let y = 2;
const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };
// calcAge(2004);

// const calcAgeArr = birthYear => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };
// calcAgeArr(2004);

// const lancer = {
//   year: 2004,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// lancer.calcAge();

// const peace = {
//   year: 2017,
// };

// peace.calcAge = lancer.calcAge;
// peace.calcAge();

// const f = lancer.calcAge;
// f();

const lancer = {
  year: 2004,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

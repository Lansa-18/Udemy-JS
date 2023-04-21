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


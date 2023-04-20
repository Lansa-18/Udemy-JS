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

// AST stands for Abstract Syntax Tree.


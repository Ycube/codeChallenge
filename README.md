# codeChallenge

 ###Functional Programming
 Functional Programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids state and mutable data. 

 ###OOP Programming
 Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which may contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods.

 ###Closure
 Closure is the combination of a function bundled together with reference to ti's surrounding state(the lexical environment).
 Closure gives access to an outer function's scope from an inner funciton
  const outter() {
    let out = 'out';
    const inner() {
      let inside = 'inside';
      return('hello from ' + inside + ' ' + out);
    } 
    inner()
   }
   outter()
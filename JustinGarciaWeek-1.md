### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  strings-primitive
  numbers-primitive
  null-primitive
  symbols-primitive
  booleans-primitive
  objects

  //Googled Answer
  strings-primitive
  numbers-primitive
  null-primitive
  symbols-primitive
  booleans-primitive
  objects
  undefined-primitive

#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess:
Undefined

Then, past the code in your console and explain why you were right/wrong.
The console showed undefined. The variable text was reassigned inside the scope of the function.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  I know the JSON is javascript object notation. Unfortunately, I do not have an answer to how this relates to javascript.

  //Googled Answer
  JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  I am not one hundred percent sure but I believe that a closure is when a function is nested into a local scope. Being in a local scope could be good for the fact that it be accessed globally.

  //Googled Answer
  A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.



#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = is used for assigning a variable.
  == I needed to google this..
  === Is used for setting values equal to.

  //Googled Answer
  = assignment operators
  == equal to
  === equal value and equal type

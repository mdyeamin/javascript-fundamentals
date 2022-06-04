// global scope ***
// The Javascript global scope is the context where everything in a Javascript program executes by default. This scope includes all variables, objects, and references that are not contained within a customized scope defined by a programmer. Global scope is the entire Javascript execution environment.

// local scope ***
//  Local Scope occurs when you create a variable inside a function. By doing that, the visibility and accessibility of the variable is only allowed within that function. Any variable created inside the yellow box is a local variable, just like any variable inside blue box is a global one.

const color = "blue"; // this is global variable, you can everywhere use

const returnSkyColor = () => {
  return color; // blue
};

console.log(returnSkyColor()); // blue

// global scope

const myGlobal = 10;

const oppsGlobal = 7;
function func() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += " Global is " + myGlobal;
  }
  if (typeof oppsGlobal != "undefined") {
    output += " oppsGlobal is " + oppsGlobal;
  }
  console.log(output);
}

func();

// program showing local scope of a variable
let a = "hello";

function greet() {
  let b = "World"; //you can't use this variable outside of the function
  console.log(a + b);
}

greet();
console.log(a + b); // error

// global VS local

const outerWear = "T-shirt"; // this variable is a global scope

function outFit() {
  const outerWear = "sweater"; // this variable is a local scope
  return outerWear;
}

console.log(outFit());

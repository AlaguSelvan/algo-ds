# Execution Context

It is defined as the environment in which the `JavaScript` code is executed

## Execution context in JavaScript is of three types


* **Global Execution Context:**
This is the default execution context in which JS code starts execution all the code gets i.e except inside function gets executed here.

* **Function Execution Context:**
It is defined as the component created by JS engine whenever it finds any function call. Each function has its own execution context, and it can be more than one. Function execution context has access of the global context, However the same is not applicable vice-versa. If js engine finds a function call, it finds a function execution context for that i.e in browser context while executing the code in strict mode the value of `this` is undefined or `window` object in the function execution context.

* **Eval:**
Execution context inside eval function

* **Execution Context Stack(ECS)**:
The Execution context is a stack data Structure and it takes place in a LIFO Data structure. Global execution context is present by default and it is present at the bottom of the stack, so while executing the Global execution context If js finds any function context it pushes it to the top and executes its and once it gets over, It pops out and executes the function that's below it.

```js
// var are set to global execution context as undefined even before declaration;
var i = 0;
// function are set to function execution context before declaring
functionA() {
	console.log('Function A called');
	functionB() {
		console.log('Function B called');

	}
	functionB();
}

functionA()

```

As soon as the code gets loaded in the browser, JS pushes the global execution, when  In the above code first functionA is pushed to the execution context and starts executing. when functionb is called inside function execution context all the code of functionb gets called and then functionb get's popped out and after that functionA gets popped out.

So far we have discussed how the JavaScript engine handles the execution context. Now, we will see how it creates the execution context.

JavaScript engine creates the execution context in the following two stages:
1. Creation Phase
2. Execution Phase
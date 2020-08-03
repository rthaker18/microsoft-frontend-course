// TODO: import the fib(n) function and the constant from './fibonacci.ts'
// import FibConst, {fib} from ...
import { fib } from './fibonacci';
import FibConst from './fibonacci';

// TODO: import Stack from ...

import { Stack } from './stack';

// Do the exercises here, outputting results using console.log()
console.log('hello world');

// ---- Modules ----

// TODO: log the result of fib(FibConst)

console.log(fib(FibConst));

// ---- Types and Interfaces ----

// TODO: define TrafficLight type
// type TrafficLight = ???

type TrafficLight = 'red' | 'yellow' | 'green';

// TODO: define Car interface
// interface Car { ??? }

interface Car {
  wheels: string;
  color: string;
  make: string;
  model: string;
}

// TODO: create Car instance
// const myCar: Car = { ??? }

const myCar: Car = { wheels: 'round', color: 'purple', make: '-d in china', model: 'only on weekends' };

console.log(myCar);

// ---- Generics ----

// TODO: Demonstrate the Stack
// const myStack: Stack<number> = ???

let myStack = new Stack<number>();

myStack.push(3);
myStack.push(4);

console.log(myStack.pop());

// ---- Spread and Destructuring ----
const obj1 = {
  first: 'who',
  second: 'what',
  third: 'dunno',
  left: 'why',
};

const obj2 = {
  center: 'because',
  pitcher: 'tomorrow',
  catcher: 'today',
};

// TODO: combine obj1 and obj2 into a single object megaObj using spread syntax
// const megaObj = ???

const megaObj = { ...obj1, ...obj2 };

// TODO: use destructuring syntax to extract { first, second, catcher }

const { first, second, catcher } = megaObj;
console.log('First:', first);
console.log('Second:', second);
console.log('Catcher:', catcher);

// ---- Async / Await ----
function makePromise() {
  return Promise.resolve(5);
}

// TODO: create a new async function

async function run() {
  // TODO: call makePromise() using await syntax and log the results
  // TODO: call your new async function

  let result = await makePromise();

  console.log(result);
}

run();

// Make this file a module so its code doesn't go in the global scope
export {};

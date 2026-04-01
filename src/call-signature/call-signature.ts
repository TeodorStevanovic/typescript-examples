type Greeting = (name: string) => string;

const fn: Greeting = (name) => `Hello, ${name}`;

console.log(fn("Teodor"));

//******************************************//

type Numbers = (a: number, b: number) => number;

const sum: Numbers = (a, b) => a + b;

console.log(sum(2, 2));
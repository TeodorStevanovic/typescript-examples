type User = {
    name: string,
    age: number,
}

function printUser(this: User) {
    return `My name is ${this.name}, I am ${this.age} years old.`
}

const person: User = {
    name: "Teodor",
    age: 24,

}

console.log(printUser.call(person));

//******************************************************************//

type UserName = {
    name: string
}

function greet(this: UserName) {
    return `Hello my name is ${this.name}`;
}

const userOne: UserName = {
    name: "Teodor"
}

const userTwo: UserName = {
    name: "Jovan"
}

const greetUserOne = greet.bind(userOne);
const greetUserTwo = greet.bind(userTwo);

console.log(greetUserOne())
console.log(greetUserTwo())

//******************************************************************//

type Numbers = {
    numbers: number[]
}

function findMax(this: Numbers) {
    let max;

    if (this.numbers.length === 0) {
        throw Error("Array is empty!");
    }
    else {
        max = this.numbers[0]
    }
    
    for (let n = 1; n < this.numbers.length; n++) {
        if (this.numbers[n] > max) {
            max = this.numbers[n]
        }
    }

    return max
}

const arrNumbers: Numbers = {
    numbers: [3, 65, 100, 56]
}

console.log(findMax.apply(arrNumbers));
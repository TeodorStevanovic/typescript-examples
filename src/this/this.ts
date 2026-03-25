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
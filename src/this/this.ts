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
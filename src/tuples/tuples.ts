let person: readonly [string, string, number] = ["Teodor", "Stevanovic", 2002];

console.log(person)

// Readonly tuple cannot be modified after initialization
// person[0] = "Bosko"; // Error: Cannot assign to '0' because it is a read-only property
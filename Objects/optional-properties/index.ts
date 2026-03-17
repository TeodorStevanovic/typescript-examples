type User = {
    name: string,
    age: number,
    email?: string
};

function printUser(user: User) {
    console.log("Name: ", user.name);
    console.log("Age: ", user.age);

    if (user.email) {
        console.log("Email: ", user.email);
    }
    else {
        console.log("E-mail not provided");
    }
};

const admin = {
    name: "Branko",
    age: 55,
    email: "brankodev55@gmail.com"
};

printUser(admin);

const person = {
    name: "Teodor",
    age: 24
}

printUser(person);
type User = {
    name: string
};

type Admin = {
    role: string
};

// Missing 'role' will cause an error because AdminUser requires all properties
// from both User and Admin types.

type AdminUser = User & Admin;

const person: AdminUser = {
    name: "Teodor",
    role: "admin"
}

console.log(person);
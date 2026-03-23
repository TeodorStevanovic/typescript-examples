enum Status {
    ACTIVE,
    INACTIVE,
    BANNED
};

enum Role {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
};

let userStatus = Status[0];

let userRole = Role.ADMIN;

console.log(userStatus);
console.log(userRole);
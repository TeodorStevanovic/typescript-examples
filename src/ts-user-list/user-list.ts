enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST"
};

type User = {
    id: number,
    name: string,
    isActive: boolean,
    role: Role
};

let users: User[] = [
    { id: 1, name: "Teodor", isActive: true, role: Role.ADMIN },
    { id: 2, name: "Mladen", isActive: false, role: Role.ADMIN },
    { id: 3, name: "Jelena", isActive: false, role: Role.USER },
    { id: 4, name: "Dragisa", isActive: true, role: Role.GUEST },
    { id: 5, name: "Teodora", isActive: true, role: Role.USER }
];

for (let i = 0; i < users.length; i++) {
    console.log(`Name: ${users[i]?.name} | Role: ${users[i]?.role} | Activate: ${users[i]?.isActive ? "YES" : "NO"}`);
};
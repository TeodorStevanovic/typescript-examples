"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
    Role["GUEST"] = "GUEST";
})(Role || (Role = {}));
;
let users = [
    { id: 1, name: "Teodor", isActive: true, role: Role.ADMIN },
    { id: 2, name: "Mladen", isActive: false, role: Role.ADMIN },
    { id: 3, name: "Jelena", isActive: false, role: Role.USER },
    { id: 4, name: "Dragisa", isActive: true, role: Role.GUEST },
    { id: 5, name: "Teodora", isActive: true, role: Role.USER }
];
for (let i = 0; i < users.length; i++) {
    console.log(`Name: ${users[i]?.name} | Role: ${users[i]?.role} | Activate: ${users[i]?.isActive ? "YES" : "NO"}`);
}
;
//# sourceMappingURL=user-list.js.map
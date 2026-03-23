"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status[Status["ACTIVE"] = 0] = "ACTIVE";
    Status[Status["INACTIVE"] = 1] = "INACTIVE";
    Status[Status["BANNED"] = 2] = "BANNED";
})(Status || (Status = {}));
;
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
    Role["GUEST"] = "guest";
})(Role || (Role = {}));
;
let userStatus = Status[0];
let userRole = Role.ADMIN;
console.log(userStatus);
console.log(userRole);
//# sourceMappingURL=enum.js.map
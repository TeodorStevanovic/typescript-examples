"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logMessage(message, context = {}) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, context.userId);
}
logMessage("Prijavljne korisnik", { userId: "2342345" });
//# sourceMappingURL=functions.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studentScores = {
    "math": 90,
    "english": 88,
    "history": 100
};
function printScores(student) {
    for (const key in student) {
        console.log(key, student[key]);
    }
    ;
}
;
printScores(studentScores);
//# sourceMappingURL=index.js.map
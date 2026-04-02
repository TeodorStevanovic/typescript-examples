"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order = (parametar) => {
    if ("quantity" in parametar) {
        return `${parametar.name} | ${parametar.quantity}`;
    }
    else {
        return parametar.name;
    }
};
console.log(order({ name: "Igracka" }));
console.log(order({ name: "Telefon", quantity: 20 }));
//# sourceMappingURL=overload.js.map
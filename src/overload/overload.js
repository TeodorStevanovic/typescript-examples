"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order = (parametar) => {
    if ("quantity" in parametar) {
        return `${parametar.name} | ${parametar.quantity}`;
    }
    else if ("discount" in parametar) {
        return `Name product: ${parametar.name} | Discount: ${parametar.discount}%`;
    }
    else {
        return parametar.name;
    }
};
console.log(order({ name: "Igracka" }));
console.log(order({ name: "Telefon", quantity: 20 }));
console.log(order({ name: "Lopta", discount: 50 }));
//# sourceMappingURL=overload.js.map
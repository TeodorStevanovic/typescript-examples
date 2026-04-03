type OrderFn = {
    (parametar: { name: string, quantity: number }): string
    (parametar: { name: string, discount: number }): string
    (parametar: { name: string }): string
}

const order: OrderFn = (parametar) => {
    if ("quantity" in parametar) {
        return `${parametar.name} | ${parametar.quantity}`
    }
    else if ("discount" in parametar) {
        return `Name product: ${parametar.name} | Discount: ${parametar.discount}%`
    }
    else {
        return parametar.name
    }
}

console.log(order({ name: "Igracka" }))
console.log(order({ name: "Telefon", quantity: 20 }))
console.log(order({name: "Lopta", discount: 50}))

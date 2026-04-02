type OrderFn = {
    (parametar: {name: string, quantity: number}): string
    (parametar: {name: string}): string
}

const order: OrderFn = (parametar) => {
    if ("quantity" in parametar) {
        return `${parametar.name} | ${parametar.quantity}`
    }
    else {
        return parametar.name
    }
}

console.log(order({name: "Igracka"}))
console.log(order({name: "Telefon", quantity: 20}))

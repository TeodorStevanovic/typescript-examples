function convert(inp: number): string;
function convert(inp: string): number;

function convert(inp: number | string) {
    if (typeof inp === "number") {
        return inp.toString();
    }
    else {
        return inp.length;
    }
}

console.log(convert(123));
console.log(convert("Teodor"));

console.log("***************************")
//*******************************************//

type UserInfo = {
    (firstName: string, lastName: string): string
    (firstName: string): string
}

let printUser: UserInfo = (firstName: string, lastName?: string) => {
    if (typeof lastName === "undefined") {
        return `${firstName}`;
    }
    else {
        return `${firstName} ${lastName}`;
    }
}

console.log(printUser("Teodor"))
console.log(printUser("Teodor", "Stevanovic"))
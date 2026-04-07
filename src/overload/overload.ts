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
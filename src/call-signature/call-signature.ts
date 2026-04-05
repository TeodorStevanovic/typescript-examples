type StringLength = (str: string) => number;

const numberLetters: StringLength = (str) => {
    if (str.length === 0) {
        return 0;
    }
    else {
        return str.length;
    }
}

console.log(numberLetters("Teodor"));
console.log("**********************")

//***********************************//
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

type Fn = (start: number, ...nums: number[]) => number;

const sumAll: Fn = (start, ...nums) => {

    let num = 0;

    for (let i = 0; i < nums.length; i++) {
        num += nums[i]
    }

    return start + num;
}

console.log(sumAll(20, 1, 2, 3));
console.log("**********************")

//***********************************//

type Square = (a: unknown) => number | string;

const sqr: Square = (a) => {
    if (typeof a === 'number') {
        return a ** 2;
    }
    else {
        return `Invalid input`;
    }
}

console.log(sqr("Teodor"))
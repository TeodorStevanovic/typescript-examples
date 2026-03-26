function* counter(num: number) {

    while (true) {
        yield num++;
    }
};

const gen = counter(5);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
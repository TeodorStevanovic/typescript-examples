// This function throws an error and never returns a value,
// so its return type is 'never'.

function throwError(message: string): never {
    throw Error(message);
}

throwError("Ovo je never tip funkcije.");
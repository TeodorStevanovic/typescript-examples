type ResponseStatus = "success" | "error" | "loading";

let status: ResponseStatus = "success";

// Union type allows only predefined values.
// In this case, status can be "success", "error", or "loading".
// Any other value (like "done";) will cause a TypeScript error.

console.log(status);
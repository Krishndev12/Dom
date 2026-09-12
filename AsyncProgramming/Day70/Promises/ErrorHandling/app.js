// creating and throwing errors

// const error = new Error("This is a custom error")
// console.log(error)
// throw error

// throw new Error("This is a custom error")

// custom error
// Error is a prototype iss se ye ekk class hai. isko extends kar ke ham custom error bana sakte hai.
class AccioError extends Error {
  constructor(m, n) {
    super(m);
    this.name = n;
  }
}

// throw new AccioError("Custom erorr", "username error")

// error - handling

try {
  throw new Error("asdfghj");
  throw new AccioError("Custom erorr", "username error");
} catch (error) {
  console.log(error.name);
} finally {
}

console.log("Important code");

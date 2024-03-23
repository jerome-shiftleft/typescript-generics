export default function constraints() {
  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

  const mergeObj = merge({ name: "Alice", hobbies: ["sports"] }, { age: 30 });
  console.log(mergeObj);
} // end of constraints

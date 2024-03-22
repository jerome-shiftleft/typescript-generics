export default function genericFunction() {

  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

  console.log(merge({name: 'Alice'}, {age: 30}));

} // end of genericFunction
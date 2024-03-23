export default function anoherGenericFunction() {
  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

  const mergeObj = merge({ name: "Alice", hobbies: ["sports"] }, { age: 30 });
  //console.log(mergeObj);

  interface Lengthy {
    length: number;
  }

  function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
      descriptionText = `Got 1 element`;
    } else if (element.length > 1) {
      descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText ]
  }

  console.log(countAndDescribe('Hello World'))
  //console.log(countAndDescribe(['sports', 'cooking']))

} // end of anoherGenericFunction

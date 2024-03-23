export default function genericClasses() {
  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

  const mergeObj = merge({ name: "Alice", hobbies: ["sports"] }, { age: 30 });
  console.log(mergeObj);

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
    return [element, descriptionText];
  }

  console.log(countAndDescribe("Hello World"));
  //console.log(countAndDescribe(['sports', 'cooking']))

  function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
  ) {
    return obj[key];
  }

  console.log(extractAndConvert(mergeObj, "name"));

  class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
      this.data.push(item);
    }

    removeItem(item: T) {
      if (this.data.indexOf(item) === -1) {
        return;
      }
      this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
      return [...this.data];
    }
  } // end of class Storage

  const textStorage = new DataStorage<string>();
  textStorage.addItem('Max');
  textStorage.addItem('Manu');  
  textStorage.removeItem('Max');
  //console.log(textStorage.getItems());

  // const objStorage = new DataStorage<object>();
  // const maxObj = {name: 'Max'}
  // objStorage.addItem(maxObj);
  // objStorage.addItem(maxObj);
  // objStorage.removeItem({name: 'Max'});
  // console.log(objStorage.getItems());

} // end of export default function genericClasses()

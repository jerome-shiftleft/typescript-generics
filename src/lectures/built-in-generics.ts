export default function builtInGenerics() {

  const names:Array<string> = ['Alice', 'Bob', 'Eve'];

  const promise: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('This is done!');
      }, 2000);
  });

} // end of builtInGenerics
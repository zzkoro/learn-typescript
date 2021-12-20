{
  // function logMessage(value: any) {
  //   console.log(value);
  // }
  // logMessage('hello');
  // logMessage(100)

  let aaa: string | number | boolean;

  function logMessage(value: string | number) {
    if (typeof value === 'number') {
      value.toLocaleString();
    } else if (typeof value === 'string') {
      value.toString();
    } else {
      throw new TypeError('value must be string or number');
    }
  }
  logMessage('hello')
  logMessage(100)

  interface Developer {
    name: string;
    skill: string;

  }

  interface Person {
    name: string;
    age: number;
  }

  function askSomeone(someone: Developer | Person) {
    someone.name = '';
  }

}
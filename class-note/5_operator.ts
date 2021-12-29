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

  // Union Type
  function askSomeone(someone: Developer | Person) {
    someone.name = '';
    someone.skill
    someone.age
  }
  askSomeone({name: 'developer', skill:'web'});
  askSomeone({name: 'captain', age: 100 });

  // Intersection Type
  function askSomeone2(someone: Developer & Person) {
    someone.age
    someone.name
    someone.skill
  }
  askSomeone2({ name: 'developer', skill: 'web' });



}
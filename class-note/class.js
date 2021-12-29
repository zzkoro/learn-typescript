// ES2015(ES6)
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성됨');
    this.age = age
    this.name = name
  }
}

let tom  = new Person('tom', 30);
console.log(tom);
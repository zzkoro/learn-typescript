interface Developer1 {
  name: string;
  skill: string;
}
interface Person1 {
  name: string;
}

class Person1 {
  name: string;
  skill: string;

  constructor(name: string, skill: string) {
    this.name = name
    this.skill = skill
  }
}

var developer1: Developer1;
var person1: Person1;

developer1 = person1;

person1 = developer1;

// 함수
var add = function(a: number) {

}
var sum = function(a: number, b: number) {
 // return a+b;
}
add = sum;
sum = add;

// 제네릭
interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;


interface NotEmpty<T> {
  data: T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;

notempty1 = notempty2;
notempty2 = notempty1;

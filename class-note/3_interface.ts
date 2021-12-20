interface User {
  age: number;
  name: string;
};

var aaa: User = {
  age: 33,
  name: 'aaa'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const capt = {
  name: '캡틴',
  age: 100
};
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sumf: SumFunction;
sumf = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}
var strArr: StringArray = ['a', 'b', 'c'];
// strArr[0] = 10

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj2: StringRegexDictionary = {
  sth: /abc/,
}

var obj3: StringRegexDictionary = {
  cssFile: /\.abc$/
}

Object.keys(obj2).forEach(function(value) {

});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var bbb: Developer = {
  language: 'ts',
  name: 'name',
  age: 0
}

// 타입추론 기본1
var a = 10;

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

// 타입추론 기본2
// interface  Dropdown<T> {
//   value: T;
//   title: string;
// }

// var shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello'
// }

 // 타입추론 기본3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'abc',
  value: 'aaa',
  tag: 'aaa'
}

var shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello'
}

// Best Common Type
var arr = [1, 2 , true, 'a']




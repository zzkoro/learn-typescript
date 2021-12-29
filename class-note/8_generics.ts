// function logText(text) {
//   console.log();
//   return text;
// }
// logText(100);
// logText('100');

function logText<T>(text: T): T {
  console.log(text)
  return text;
}
var text  = logText<string>('hi');
text.charCodeAt(0);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false }

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: 'abc', selected: false};

// 제너릭의 타입제한
function logTextLength<T extends Array<any>>(text: T): T  {
  console.log(text.length);
  text.forEach(function (item) {
    console.log(item);
  });
  return text;
}
logTextLength(['hi', 'abc']);

// 제네릭 타입제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}

let aaa = logTextLength2({length: 10, text: 'hi'});
logTextLength2('a');
logTextLength2(10);

// 제네릭 타입제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
getShoppingItemOption("name");
getShoppingItemOption("price");






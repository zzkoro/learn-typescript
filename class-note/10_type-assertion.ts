// 타입 단언(type assertion)
var a1;
a1 = 10
a1 = 'a'

var b = a1 as string; 

//DOM API 조작
var div = document.querySelector('div');
if (div) {
  div.innerText
}
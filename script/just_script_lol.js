//скрипт который вытаскивает значения из элементов

let elementsHTML = document.querySelectorAll(".text-text > .col_b");
let arr_1 = [];

for (let i = 0; i < elementsHTML.length; i++) {
  arr_1.push(elementsHTML[i].innerText);
}
console.log(arr_1);
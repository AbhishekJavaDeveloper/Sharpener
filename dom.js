// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// console.log(document.getElementById('header-title'));
// var a = document.getElementById('header-title');
// console.log(a);
// console.log(a.textContent);
// a.textContent = 'Hello';
// a.innerText = 'Hello wORLD';
// a.innerHTML = '<h3>Hello</h3>';
// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].style.backgroundColor='green';

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}
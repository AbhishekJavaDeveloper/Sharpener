// // // console.log(document.domain);
// // // console.log(document.URL);
// // // console.log(document.title);
// // // console.log(document.doctype);
// // // console.log(document.head);
// // // console.log(document.body);
// // // console.log(document.all);
// // // console.log(document.all[10]);
// // // console.log(document.forms[0]);
// // // console.log(document.links);
// // // console.log(document.images);
// // // console.log(document.getElementById('header-title'));
// // // var a = document.getElementById('header-title');
// // // console.log(a);
// // // console.log(a.textContent);
// // // a.textContent = 'Hello';
// // // a.innerText = 'Hello wORLD';
// // // a.innerHTML = '<h3>Hello</h3>';
// // // var header = document.getElementById('main-header');
// // // header.style.borderBottom = 'solid 3px #000';

// // // var items = document.getElementsByClassName('list-group-item');
// // // console.log(items);
// // // console.log(items[1]);
// // // items[2].style.backgroundColor='green';

// // // for(let i=0;i<items.length;i++){
// // //     items[i].style.fontWeight = 'bold';
// // // }

// // var li = document.getElementsByClassName('li');
// // console.log(li);
// // console.log(li[1]);
// // items[2].style.backgroundColor='green';

// // for(let i=0;i<items.length;i++){
// //     items[i].style.fontWeight = 'bold';
// // }



// // const itemsByClassName = document.getElementsByClassName("list-group-item");
// //   if (itemsByClassName.length > 0) {
// //     const newItemByClassName = itemsByClassName[itemsByClassName.length - 1]; 
// //     newItemByClassName.textContent = "Edited by getElementsByClassName";
// //   }

// //   const itemsByTagName = document.getElementsByTagName("li");
// //   if (itemsByTagName.length > 0) {
// //     const newItemByTagName = itemsByTagName[itemsByTagName.length - 1]; 
// //     newItemByTagName.textContent = "Edited by getElementByTagName";
// //   }

// // var header = document.querySelector('#main-header');
// // header.style.borderBottom = 'solid 4px #ccc'
// // var input = document.querySelector('input');
// // input.value='Hello World';

// // var submit = document.querySelector('input[type="submit"]');
// // submit.value="SEND"

// // var second = document.querySelector('.list-group-item:nth-child(2)');
// // second.style.backgroundColor="green";

// // var third = document.querySelector('.list-group-item:nth-child(3)');
// // third.style.display = 'none';


// const secondItem = document.querySelector("#items li:nth-child(2)");
// secondItem.style.color = "green";

// const oddItems = document.querySelectorAll("#items li:nth-child(odd)");
// oddItems.forEach(item => {
//   item.style.backgroundColor = "green";
// });

// TRAVERSING THE DOM
var itemList = document.querySelector('#items');

//parent Node
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//parent Element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//children nodes
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

// //First Child
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

//Last Child
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';

// //nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);
// itemList.nextElementSibling.style.color='green';


// //previousSibling
// console.log(itemList.nextSibling);
// //previousElementSibling
// console.log(itemList.previousElementSiblingSibling);
// itemList.previousElementSibling.style.color='green';

var newdiv = document.createElement('div');

newdiv.className='helloworld';

newdiv.id = 'h1';

newdiv.setAttribute('title','helloo');

var newdivtext = document.createTextNode('Hey world');

newdiv.appendChild(newdivtext);

console.log(newdiv);

// Get the header title element and add "Hello" before it
const headerTitle = document.getElementById("header-title");
headerTitle.textContent = "Hello " + headerTitle.textContent.trim();
console.log("Modified Header Title:", headerTitle.textContent);

// Get the first list item element and add "Hello" before it
const firstListItem = document.querySelector("#items li:first-child");
firstListItem.textContent = "Hello " + firstListItem.textContent;
console.log("Modified First List Item:", firstListItem.textContent);

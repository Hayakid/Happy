// const content= document.querySelector('.content');
// const h1El1 =document.createElement('h1');
// const imgEl = document.createElement('img');
// const liEl = document.querySelectorAll('.menu_list');
// const liElOne = document.querySelector('.menu_list');
// const linkEl =  document.querySelector('.menu_link');
// const menuEl = document.querySelector ('.menu');


// menuEl.childNodes.forEach(element => {
//     console.log(element);
// });


// h1El1.textContent = ' h1 el 1';
// h1El1.style.backgroundColor = 'grey';
// h1El1.style.textAlign = ' center ';
// h1El1.setAttribute('class','heading');


// content.appendChild(h1El1);
// content.appendChild(imgEl);


// imgEl.scr='photo.png';
// imgEl.setAttribute('alt','cool photo')




// console.log(liEl); 
// console.log(liElOne.parentNode.children);

// console.log(linkEl.children);
// console.log(linkEl.childNodes);

// console.log(menuEl.children);
// console.log(menuEl.childNodes);

// const block = document.querySelector('.block');
// const item = document.createElement('div');

// item.className = 'item';
// item.textContent = 'element inside';
// item.style.color = 'blue';
// item.style.border = '1px solid black';
// item.style.backgroundColor = 'green';
// item.style.padding = '16px';

// block.setAttribute('class','item_1');
// block.appendChild(item);
ew

// const text= document.querySelectorAll('.text')
// console.log(text.previousElementSibling);
// console.log(text.parentElement);
// console.log(text.parentElement.parentElement.children[0]);  
// console.log(paxt.parentElement.parentElement);
const h2 =document.querySelector('.subtitle');
const parent =h2;
while (parent) {
    parent=parent.parentElementl;
    console.log(parent);
}
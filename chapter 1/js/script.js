'use strict';

let itemMenu = document.querySelectorAll('.menu-item'),
  li = document.createElement('li'),
  menu = document.querySelector('.menu'),
  title = document.querySelector('#title'),
  adv = document.querySelector('.adv'),
  column = document.querySelectorAll('.column'),
  qst = document.querySelector('#prompt');
//1
li.classList.add('menu-item');
li.textContent = 'пятый пункт';
menu.appendChild(li);
//2
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
title.textContent = 'Мы продаем только технику Apple';

column[1].removeChild(adv);

qst.textContent = prompt('Apple is good?');
//
console.log(column);
console.log(adv);
console.log(title);
console.log(itemMenu);
console.log(menu);
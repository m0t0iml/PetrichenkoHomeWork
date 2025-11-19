let menuItems = document.querySelectorAll('.menu-item'),
    menuitem = document.createElement('li'),
    menu = document.querySelector('.menu');

menuItems[2].after(menuItems[1]);
menuitem.textContent = 'Пятый пункт';
menuitem.classList.add('menu-item'); 
menu.append(menuitem);
let body = document.querySelector('body');
body.style.backgroundImage = "url('../img/apple_true.jpg')";
let ttl = document.getElementById('title');
ttl.innerHTML = 'Мы продаем только подлинную технику Apple';
let adv = document.querySelector('.adv');
adv.remove();
let prmt = document.querySelector('.prompt');
let pr = prompt('Как Вы относитесь к технике apple?:');
prmt.innerHTML = pr;

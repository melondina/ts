"use strict";
//приведение типов
const n = 10;
const s = n.toString();
const s2 = String(n);
const str = 'ts';
const num1 = +str;
const num2 = parseInt(str);
const num3 = Number(str);
const is1 = !str;
const is2 = !!str;
const is3 = Boolean(str);
const cat = {
    name: 'Cat',
    age: 2,
    breed: 'Cat',
    // voice: 'mau' // ошибка тк свойства нет у энимала
};
const cat1 = {
    name: 'Cat',
    age: 2,
    breed: 'Cat',
    voice: 'mau' // ошибка нет, но так делать не стоит
};
const myCat = {
    ...cat,
    home: 'Home',
    owner: {
        firstName: 'Name'
    }
};
const animalToPet = (animal, home, nameOwner) => ({
    name: animal.name,
    home,
    owner: {
        firstName: nameOwner,
    }
});
const myCat1 = animalToPet(cat, 'Home', 'Name');
//checkbox
const checkbox = document.querySelector('checkbox');
if (checkbox.checked) { //нет ошибок чекбокс определчется верно, но это не безопасно
    console.log('first');
}
const checkbox1 = document.querySelector('checkbox');
if (checkbox1.checked) { //нет ошибок чекбокс определчется верно, безопасно, но не для строки
    console.log('first');
}
//этот вариант нужно использовать, самый бнзопасный
const checkbox3 = document.querySelector('checkbox');
if (checkbox3 instanceof HTMLInputElement) {
    checkbox.checked;
}
// но еще удобнее функция
const isHTMLInputElement = (// typeguard function
element) => {
    if (element instanceof HTMLInputElement) {
        return true;
    }
    else {
        return false;
    }
};
if (isHTMLInputElement(checkbox)) {
    checkbox.checked;
}
const format1 = (value) => {
    if (typeof value === 'number') {
        return value.toFixed(2);
    }
    else {
        return parseFloat(value).toFixed(2);
    }
}; // или используем typeguard
const isNumber = (value) => typeof value === 'number'; //typeguard
const format2 = (value) => {
    if (isNumber(value)) {
        return value.toFixed(2);
    }
    else {
        return parseFloat(value).toFixed(2);
    }
};
const handle = (value) => {
    if (value.type === 'animal') {
        value.habitat; // вижу все свойства для двух типов
    }
    if ('habitat' in value) {
        value.habitat; // свойства только энимал
    } // или использовать typeguard
    if (isAnimal(value)) {
        value.habitat;
    }
};
const isAnimal = (value) => 'habitat' in value; //typeguard
const dog = {
    name: 'Dog',
    age: 15,
};

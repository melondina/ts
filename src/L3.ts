//приведение типов

const n = 10;
const s: string = n.toString();
const s2: string = String(n);

const str = 'ts';
const num1: number = +str;
const num2: number = parseInt(str);
const num3: number = Number(str);

const is1: boolean = !str;
const is2: boolean = !!str;
const is3: boolean = Boolean(str);

type animal = {
    name: string,
    age: number,
    breed: string,
}

const cat: animal = {
    name: 'Cat',
    age: 2,
    breed: 'Cat',
    // voice: 'mau' // ошибка тк свойства нет у энимала
}

const cat1 = {
    name: 'Cat',
    age: 2,
    breed: 'Cat',
    voice: 'mau' // ошибка нет, но так делать не стоит
} as animal

type pet = {
    name: string,
    home: string,
    owner: {
        firstName: string
    },
}

const myCat: pet = { // кот типа животного
    ...cat,
    home: 'Home',
    owner: {
        firstName: 'Name'
    }
}

const animalToPet = (animal: animal, home: string, nameOwner: string): pet => ({
    name: animal.name,
    home,
    owner: {
        firstName: nameOwner,
    }
})

const myCat1: pet = animalToPet(cat, 'Home', 'Name');

//checkbox

const checkbox = document.querySelector('checkbox') as HTMLInputElement;
if (checkbox.checked) { //нет ошибок чекбокс определчется верно, но это не безопасно
    console.log('first')
}

const checkbox1 = document.querySelector('checkbox');
if ((checkbox1 as HTMLInputElement).checked) { //нет ошибок чекбокс определчется верно, безопасно, но не для строки
    console.log('first')
}

//этот вариант нужно использовать, самый бнзопасный

const checkbox3 = document.querySelector('checkbox');
if (checkbox3 instanceof HTMLInputElement) {
    checkbox.checked
}

// но еще удобнее функция

const isHTMLInputElement = ( // typeguard function
    element: HTMLInputElement | null,
): element is HTMLInputElement => {
    if (element instanceof HTMLInputElement) {
        return true;
    } else {
        return false
    }
}

if (isHTMLInputElement(checkbox)) {
    checkbox.checked
}

const format1 = (value: string|number): string => {
    if(typeof value === 'number') {
        return value.toFixed(2);
    } else {
        return parseFloat(value).toFixed(2);
    }
} // или используем typeguard

const isNumber = (value: unknown): value is number => 
    typeof value === 'number'; //typeguard

const format2 = (value: string|number): string => {
    if(isNumber(value)) {
        return value.toFixed(2);
    } else {
        return parseFloat(value).toFixed(2);
    }
}


type animal1 = {
    type: 'animal',
    name: string,
    age: number,
    habitat: string,
}
type pet1 = {
    type: 'pet',
    name: string,
    home: string,
}

const handle = (value: animal1 | pet1) => {
    if(value.type === 'animal') {
        value.habitat // вижу все свойства для двух типов
    }

    if('habitat' in value) {
        value.habitat// свойства только энимал
    } // или использовать typeguard

    if(isAnimal(value)) {
        value.habitat
    }
}

const isAnimal = (value: animal1|pet1): value is animal1 => 
    'habitat' in value; //typeguard


// интерфейсы

interface Animal {// описывают только объекты, типы все что угодно
    name: string;
}

interface AnimalWithGenius extends Animal {
    age: number;

}

const dog: AnimalWithGenius = {
    name: 'Dog',
    age: 15,
}








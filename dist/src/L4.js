"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ооп
var StatusStudent;
(function (StatusStudent) {
    StatusStudent["enrollee"] = "enrollee";
    StatusStudent["student"] = "student";
    StatusStudent["graduate"] = "graduate";
    StatusStudent["bachelor"] = "bachelor";
})(StatusStudent || (StatusStudent = {}));
class Person {
    name;
    age;
    id = Math.random().toString(32).substring(2, 6) + Date.now();
    createAt = new Date();
    updateAt; // можем обращаться в дочернем классе
    constructor(name, age) {
        this.name = name;
        if (typeof age === 'number') {
            this.age = age;
        }
    }
    getInfo() {
        if (this.age) {
            return `${this.name}, ${this.age}`;
        }
        return this.name;
    }
}
class Student extends Person {
    static school = 'METHED'; // нельзя поменять
    static count;
    status = StatusStudent.enrollee;
    name;
    course;
    // age?: number;
    _module = 0; // инициализировали и тс не ругается
    constructor(name, courseOrAge, age) {
        let ageOrUndefined;
        if (typeof courseOrAge === 'number') {
            ageOrUndefined = courseOrAge;
            // this.changeStatus(StatusStudent.student);
        }
        // if(typeof courseOrAge === 'number') {
        //     this.age = courseOrAge;
        // }
        if (age) {
            ageOrUndefined = age;
        }
        super(name, ageOrUndefined);
        this.name = name;
        Student.count++;
    }
    // getInfo(): string {
    //     return `${this.name} is at ${this.course}`;
    // }
    getInfo() {
        const info = super.getInfo();
        if (this.course) {
            return `${info}, is at ${this.course}`;
        }
        return info;
    }
    // override getInfo(): string {// переопределить метод из персон
    //     if(this.course) {
    //         return `${this.name}, is at ${this.course}`;
    //     }
    //     return this.name;
    // }
    get info() {
        return `${this.name} is on ${this.course}`;
    }
    set module(module) {
        this._module = module;
        this.updateAt = new Date();
    }
    changeStatus(status) {
        this.status = status;
        this.updateAt = new Date();
        this.changeUpdateDate(); //только здесь, снаружи не работает потому что приватный
    }
    changeInfo(courseOrModule, module) {
        if (typeof courseOrModule === 'string') {
            this.course = courseOrModule;
        }
        if (typeof courseOrModule === 'number') {
            this.module = courseOrModule;
        }
        if (module) {
            this.module = module;
        }
        this.updateAt = new Date();
    }
    changeUpdateDate() {
        this.updateAt = new Date();
    }
    static createStudents(list, course) {
        return list.map(name => new Student(name, course)); //статичный метод
    }
    static createStudentFronPerson(person, course) {
        if (person.age) {
            if (course) {
                return new Student(person.name, course, person.age);
            }
            return new Student(person.name, person.age);
        }
        if (course) {
            return new Student(person.name, course);
        }
        return new Student(person.name);
    }
    static {
        Student.count = 0;
    }
    logger() {
    }
}
const students = Student.createStudents(['Ivan', 'Olga', 'Elena'], 'React');
console.log(students);
const student = new Student('Dima', 'FE');
console.log(student.getInfo());
console.log(student.info);
student.module = 2;
setTimeout(() => {
    student.module = 1;
    student.status = StatusStudent.student;
}, 3000);
setTimeout(() => {
    student.module = 2;
}, 5000);
setTimeout(() => {
    student.module = 3;
    student.status = StatusStudent.graduate;
}, 75000);
//перегрузка
const student1 = new Student('Petr'); //для того чтобы выводить одно имя, то в кострукторе мы это должны указать
const student2 = new Student('Dima', 'FE');
const student3 = new Student('Oleg', 18);
const student4 = new Student('Ivan', 'JS', 18);
student4.changeInfo('TS', 3); //важен порядок
student2.changeInfo(2);
console.log(Student.count);
//модификаторы доступа
//паблик по умолчанию
//прайват можно использовать внутри класса только
//протектед 
// zнаследование
// const person1: Person = new Person('Alex', 45);
// console.log(person1.getInfo());
console.log(student1.getInfo());
class TV {
    title;
    id = Date.now();
    count;
    price;
    constructor(title, price, count = 0) {
        this.title = title;
        this.price = price;
        this.count = count;
    }
    logger(str) {
        console.log(str + this.title);
    }
}
class WM {
    title;
    id = Date.now();
    count;
    price;
    weight;
    constructor(title, price, count = 0, weight) {
        this.title = title;
        this.price = price;
        this.count = count;
        this.weight = weight;
    }
    logger(str) {
        console.log(str + this.title);
    }
}

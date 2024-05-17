import { calcTotalPrice } from './modules/calc';
//ооп

enum StatusStudent {
    enrollee = 'enrollee',
    student = 'student',
    graduate = 'graduate',
    bachelor = 'bachelor',

}

abstract class Person {// на основе персона мы никого не сможем создать
    age?: number;
    id: string = Math.random().toString(32).substring(2,6) + Date.now();
    createAt: Date = new Date();
    protected updateAt?: Date;// можем обращаться в дочернем классе

    constructor(name: string);
    constructor(name: string, age: number|undefined);
    constructor(public readonly name: string, age?:number|undefined) {
        if(typeof age === 'number') {
            this.age = age;
        }
    }

    getInfo(): string {
        if(this.age) {
            return `${this.name}, ${this.age}`;
        }

        return this.name;
    }

    abstract logger(): void;
}


class Student extends Person {
    static readonly school = 'METHED'; // нельзя поменять
    static count: number;
    status: StatusStudent = StatusStudent.enrollee;
    name: string;
    course?: string;
    // age?: number;
    _module: number = 0; // инициализировали и тс не ругается
    // _module!: number;
    // _module?: number;//не обращай внимание что я делаю. вместо ! можно ?

    constructor(name: string);
    constructor(name: string, course:string);
    constructor(name: string, age:number);
    constructor(name: string, course:string, age?:number);
    constructor(name: string, courseOrAge?:string|number, age?: number) {
        let ageOrUndefined: number|undefined;
        if(typeof courseOrAge === 'number') {
            ageOrUndefined = courseOrAge;
            // this.changeStatus(StatusStudent.student);
        }
        // if(typeof courseOrAge === 'number') {
        //     this.age = courseOrAge;
        // }
        if(age) {
            ageOrUndefined = age;
        }

        super(name, ageOrUndefined);
        this.name = name;

        Student.count++;
        
    }

    // getInfo(): string {
    //     return `${this.name} is at ${this.course}`;
    // }

    override getInfo(): string {// переопределить метод из персон
        const info = super.getInfo();
        if(this.course) {
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

    get info(): string {
        return `${this.name} is on ${this.course}`;
    }

    set module(module: number) {
        this._module = module;
        this.updateAt = new Date();
    }

    changeStatus(status: StatusStudent): void {
        this.status = status;
        this.updateAt = new Date();
        this.changeUpdateDate()//только здесь, снаружи не работает потому что приватный
    }

    changeInfo(course:string): void;
    changeInfo(module:number): void;
    changeInfo(course:string, module:number): void;
    changeInfo(courseOrModule:string|number, module?:number): void {
        if(typeof courseOrModule === 'string') {
            this.course = courseOrModule
        }
        if(typeof courseOrModule === 'number') {
            this.module = courseOrModule
        }
        if(module) {
            this.module = module
        }
        this.updateAt = new Date();
    }

    private changeUpdateDate(): void {
        this.updateAt = new Date();
    }

    static createStudents(list: string[], course:string): Student[] {
        return list.map(name => new Student(name, course)); //статичный метод
    }

    static createStudentFronPerson(person: Person): Student;
    static createStudentFronPerson(person: Person, course: string):Student;

    static createStudentFronPerson(person: Person, course?: string): Student {
        if(person.age) {
            if(course) {
                return new Student(person.name, course, person.age);
            }
            return new Student(person.name, person.age);
        }
        if(course) {
            return new Student(person.name, course);
        }

        return new Student(person.name);
    }

    static {
        Student.count = 0
    }
    logger(): void {
        
    }
}

const students = Student.createStudents(['Ivan', 'Olga', 'Elena'], 'React');
console.log(students);

const student: Student = new Student('Dima', 'FE');
console.log(student.getInfo());
console.log(student.info);
student.module = 2;

setTimeout(() => {
    student.module = 1;
    student.status = StatusStudent.student;
}, 3000);

setTimeout(() => {
    student.module = 2;
}, 5000)

setTimeout(() => {
    student.module = 3;
    student.status = StatusStudent.graduate;

}, 75000);

//перегрузка

const student1: Student = new Student('Petr');//для того чтобы выводить одно имя, то в кострукторе мы это должны указать
const student2: Student = new Student('Dima', 'FE');
const student3: Student = new Student('Oleg', 18);
const student4: Student = new Student('Ivan', 'JS', 18);
student4.changeInfo('TS', 3);//важен порядок
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

// const studentFromPerson: Student = Student.createStudentFronPerson(person1, 'js');


// 
interface Identify {
    readonly id: number;
}

interface Goods {
    readonly title: string;
    count: number;
    price: number;

    logger(str: string): void;
}



class TV implements Goods, Identify {
    readonly id: number = Date.now();
    count: number;
    price: number;

    constructor(readonly title: string, price: number, count: number =  0) {
        this.price = price;
        this.count = count;
    }
    logger(str: string): void {
        console.log(str + this.title);
    }
}

class WM implements Goods, Identify {
    readonly id: number = Date.now();
    count: number;
    price: number;
    weight: number;

    constructor(readonly title: string, price: number, 
        count: number =  0, weight: number) {
        this.price = price;
        this.count = count;
        this.weight = weight;
    }
    logger(str: string): void {
        console.log(str + this.title);
    }
}

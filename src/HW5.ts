{interface User {
firstName: string;
surname: string;
age: number;
id: number;
}

type SortOrder = 'asc' | 'desc';

abstract class Users<T extends User> {
protected userList: T[] = [];

public add(user: T): void {
this.userList.push(user);
}

public get(id: number): T | null {
return this.userList.find(user => user.id === id) ?? null;
}

public remove(id: number): boolean {
const index = this.userList.findIndex(user => user.id === id);
if (index !== -1) {
    this.userList.splice(index, 1);
    return true;
}
return false;
}

public sorted(order: SortOrder = 'asc'): T[] {
return [...this.userList].sort((a, b) => {
    if (order === 'asc') {
        return a.id - b.id;
    } else {
        return b.id - a.id;
    }
});
}
}

interface Student {
specialty: string;
year: number;
firstName: string;
surname: string;
age: number;
id: number;
}

class Students extends Users<Student> {}

const students = new Students();
students.add({
specialty: 'JS',
year: 2020,
firstName: 'Ivan',
surname: 'Ivanov',
age: 18,
id: 1,
})
students.add({
specialty: 'TS',
year: 2021,
firstName: 'Ivan',
surname: 'Sidorov',
age: 19,
id: 2,
})
students.add({
specialty: 'TS',
year: 2021,
firstName: 'Ivan',
surname: 'Sidorov',
age: 19,
id: 3,
})
students.add({
specialty: 'TS',
year: 2021,
firstName: 'Ivan',
surname: 'Sidorov',
age: 19,
id: 4,
})
students.add({
specialty: 'TS',
year: 2021,
firstName: 'Ivan',
surname: 'Sidorov',
age: 19,
id: 5,
})

console.log(students.get(1));
console.log(students.remove(2));


interface Employee {
post: string;
firstName: string;
surname: string;
age: number;
id: number;
}

class Employees extends Users<Employee> {}

const employees = new Employees();
employees.add({
post: 'Teacher',
firstName: 'Oleg',
surname: 'Oleg',
age: 55,
id: 1,
})
employees.add({
post: 'Head',
firstName: 'Max',
surname: 'Max',
age: 45,
id: 2,
})

console.log(employees.get(1));
console.log(employees.remove(2));
}
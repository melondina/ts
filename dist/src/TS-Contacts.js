"use strict";
{
    const persons = [
        {
            name: 'Иван Петров',
            age: 27,
            group: 'SEO-специалист',
        },
        {
            name: 'Марат Aляуддинов',
            age: 20,
            group: 'Музыкант',
        },
        {
            name: 'Иван Иванов',
            age: 35,
            group: 'Коллеги',
        },
        {
            name: 'Петр Петров',
            age: 23,
            group: 'Друзья',
        },
        {
            name: 'Сергей Сергеев',
            age: 44,
            group: 'Семья',
        },
        {
            type: 'admin',
            name: 'Сергей Сергеев',
            age: 44,
            role: 'Admin',
        }
    ];
    const logPerson = (person) => {
        console.log(`${person.name}, ${person.age}`);
    };
    console.log('Users:');
    persons.forEach(logPerson);
}

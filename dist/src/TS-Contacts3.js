"use strict";
{
    ;
    const persons = [
        {
            type: 'user',
            name: 'Иван Петров',
            age: 27,
            group: 'SEO-специалист',
        },
        {
            type: 'user',
            name: 'Марат Aляуддинов',
            age: 20,
            group: 'Музыкант',
        },
        {
            type: 'user',
            name: 'Иван Иванов',
            age: 35,
            group: 'Коллеги',
        },
        {
            type: 'user',
            name: 'Петр Петров',
            age: 23,
            group: 'Друзья',
        },
        {
            type: 'user',
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
        let information;
        if (person.type === 'user') {
            information = person.group;
        }
        else {
            information = person.role;
        }
        console.log(`${person.name}, ${person.age}, ${information}`);
    };
    persons.forEach(logPerson);
}

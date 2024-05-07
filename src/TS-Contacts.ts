type User = {
    name: string,
    age: number,
    group: string,
};

type Admin = {
    name: string;
    age: number;
    role: string;
  }
  
  type Person = User | Admin;
  

const persons: Person[] = [
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
    name: 'Сергей Сергеев',
    age: 44,
    role: 'Admin',
  }

];

const logPerson = (person: Person): void => {
  console.log(`${person.name}, ${person.age}`);
}

console.log('Users:');
persons.forEach(logPerson);
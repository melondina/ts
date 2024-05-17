{//union
let count:number | void; //union
count = 1;


let obj: {} | null = null;

obj = {
    name: 'Dina',
    age: 35,
}

const logger = (id: string | number): void => { //union функция ничего не возвращает
    if (typeof id === 'string') {
        console.log(id.toUpperCase());// methods for string
    } else {
        console.log(id) //methods for number
    }
};

const loggerObj = (obj: {a: number} | {b: number}) => {
    if ('a' in obj) {
        console.log(obj.a)
    } else obj.b;
} //сужение типов

const loggerError = (error: string[] | string | Error) => {
    if(Array.isArray(error)) {
        for (const str of error) {
            str
        }
    }
    if (error instanceof Error) {
        console.log(error)
    }
}

const loggerError1 = (error: string): never => { //ничего не возвращает, просто прекращает работу
    throw new Error(error);
}

const hole: null = null;
const vacuum: undefined = undefined;
const vacuum1: void = undefined;

//elias
//для объектов, однотипных массивов

type skill = [number, string, number];

const html: skill = [1, 'html', 10];
const css: skill = [2, 'css', 20];
const js: skill = [3, 'js', 30];

const allSkills: skill[] = [
    [1, 'html', 10],
    [2, 'css', 20],
    [3, 'js', 30],
];

type module = {
    index: number;
    title: string;
    hours: number;
}

const m1: module = {
    index: 1,
    title: 'html',
    hours: 5,
};

const m2: ModuleWithFinalProject = {
    index: 2,
    title: 'css',
    hours: 15,
    descriptionFinalProject: 'A',
    hoursFinalProject: 10,

};

const course: module[] = [
    {
        index: 1,
        title: 'html',
        hours: 5,
    },
    {
        index: 2,
        title: 'css',
        hours: 15,
    },
];

type FinalProject = {
    descriptionFinalProject: string,
    hoursFinalProject: number,
}

type ModuleWithFinalProject = module & FinalProject;//intersecttion
// type ModuleWithFinalProject = module | FinalProject; //union


//literal

const a = 2;// присваиваем дитеральный тип сразу;

let b: 2|3 = 2;
b=3 //можем присвоить только 2 или 3

type httpMethod = 'GET'|'POST'

const apiService = (url: string , method: httpMethod) => {
    fetch(url, {
        method,
    })
}

const method = 'POST';
const objO: {
    method: 'POST'
} = {
    method: 'POST'
}

apiService('http://site.com', objO.method);

//ENUM

enum LOCALE {
    RU = 'ru-RU',
    EN = 'en-US'
}


const translate = (lang: LOCALE, text: string)
: string => {

    //translation
    return text
}

translate(LOCALE.EN, 'text');

enum TypeUser {
    admin = 'admin',
    moderator = 'moderator',
    user = 'user',
}
console.log(TypeUser['moderator']);

enum statusCode {
    SUCCESS = 'success',
    PROCESS = 'process',
    FAILED = 'failed'
}

const res = {
    message: 'Success',
    statusCode: statusCode.SUCCESS,
}

if (res.statusCode === statusCode.PROCESS) {
    //preloader
}

const div = (a: number, b: number, round?: true): number => {
    const res = a / b;

    if (round) {
        return Math.round(res);
    }

    return res;
}

div(15, 4 , true); 

type Student = {
    firstName: string,
    lastName: string,
    age: number,
    bornCity?: string,//не обязательное поле
}

// contracts
type HttpRequestPending = {
    status: 'pending',
}
type HttpRequestSuccess = {
    status: 'success',
    data: [],
}
type HttpRequestFailed = {
    status: 'failed',
    error: string,
}

type HttpRequest = |HttpRequestPending|HttpRequestSuccess|HttpRequestFailed

const fetchData = (res: HttpRequest): void => {
    if(res.status === 'pending') {
        
    }

    if(res.status === 'success') {
        
    }

    if(res.status === 'failed') {
        
    }
}}
import { product } from './modules/product';
const log = <T, B>(val: T, val2: B): T => { //generic в файлах tsx нужно поставить запятую
    //const log = <T,>(val: T): T 
    console.log(val);
    console.log(val2);
    return val;
}

function log2 <T>(val: T): T {
    console.log(val);
    return val;
}

log<string, number>('string', 10);

log2<boolean>(!5);

const arr: Array<string> = ['a', 'b'];//generic

type filterArray = <T>(arr: T[], exclude: T[]) => T[];
const filterArr1: filterArray = (arr, exclude) => // если указываем тип сначала, то потом можно не прописывать 
    arr.filter((item) => !exclude.includes(item));

//или такая запись ниже

const filterArr = <T>(arr: T[], exclude: T[]): T[] => 
    arr.filter((item) => !exclude.includes(item));

const res = filterArr<number>([1,2,3,4,5], [2,4]);

// универсальный дженерик

interface HttpResponseError {
    success: false,
    error: string,
}

interface HttpResponseSuccess<T> {
    success: true,
   data: T,
}

type HttpResponse<T> = HttpResponseSuccess<T> | HttpResponseError;
// { // или такая запись, если выше не используем
//     success: boolean,
//     error?: boolean,
//     data?: T;
// }

interface product {
    id: number,
    title: string,
    count: number,
}

interface person {
    name: string,
    role: string,
}

const response: HttpResponse<product[]> = {
    success: true,
    data: [
        {
            id: 21,
            title: 'string',
            count: 1,
        },
        {
            id: 22,
            title: 'string1',
            count: 10,
        },
    ],
}

const response2: HttpResponse<person[]> = {
    success: true,
    data: [
        {
            name: 'Ivan',
            role: 'Teacher',
        },
        {
            name: 'Oleg',
            role: 'Doctor',
        },
    ],
}

const response3: HttpResponse<string> = {
    success: true,
    data: 'Order is 122'
}

//конкретный дженерик

interface Goods {
    title: string,
    count: number;
}

const getCountGoods = <T extends Goods>(arr: T[], title: string): number => {
    const goods = arr.find(item => item.title === title);
    return goods?.count ?? 0
}

class HttpResponse3<D, E> {
    protected success: boolean;
    protected data? : D;
    protected code? : E;

    constructor(success: boolean, data?: D, error?: E) {
        this.success = success;
        if(data) {
            this.data = data;
        }

        if(error) {
            this.code = error;
        }
    };
}

const responseToken = new HttpResponse3<number, string>(true, 4564564)
const responseUSer = new HttpResponse3<string, string>(true, 'Ivan')


interface Goods1 {
    title: string;
    count: number;
    price: number;
}

type KeyOfGoods = keyof Goods1;

// const filter = (arr: Goods1[], key: KeyOfGoods, value: Goods1[KeyOfGoods]) => {
//     return arr.filter((goods: Goods1) => goods[key] === value);
// }

const filter = <T, K extends keyof T> (arr: T[], key: K, value: T[K]) => {
    return arr.filter((item: T) => item[key] === value);
} // запись через дженерики


const categories = ['A', 'B'] as const;

type categoryTypes = typeof categories[number];


abstract class  Cart<T extends Goods1> {
    public goods: T[] = [];
    public add(item:T): void {
        this.goods.push(item);
    }

    public get(title: string): T | null {
        return this.goods.find(item => item.title === title) ?? null;
    }

    public get totalPrice(): number {
        return this.goods.reduce((acc, item) => acc + (item.price * item.count), 0);
    }
}

interface TechGoods {
    title: string;
    count: number;
    price: number;
    type: categoryTypes;
    desc: string;
}

class TechCart extends Cart<TechGoods> {}

const techCart = new TechCart();

techCart.add({
    title: 'A',
    count: 5,
    price: 2000,
    type: 'A',
    desc: 'AAAA',
})

techCart.add({
    title: 'B',
    count: 4,
    price: 1000,
    type: 'B',
    desc: 'BBBB',
});
console.log(techCart.totalPrice);
console.log(techCart.get('A'));

const res3 = filter(techCart.goods, 'price', 5000);
console.log(res3);

const goods: TechCart['goods'][number] = {
    title: 'A',
    count: 5,
    price: 2000,
    type: 'A',
    desc: 'AAAA',
}

const goods2: typeof goods = {
    title: 'B',
    count: 4,
    price: 1000,
    type: 'B',
    desc: 'BBBB',
}

type keyOfGoods = keyof typeof goods;

const keys: keyOfGoods = 'type';

//утилитарные типы

interface Goods2 {
    id: number;
    title: string;
    count?: number;
    readonly price: number;
}

type partialGoods = Partial<Goods2>; //поля не обязательны

type requiredGoods = Required<Goods2>;// все поля обязательны

type readonlyGoods = Readonly<Goods2>;

type readonlyReqGoods = Required<Readonly<Goods2>>;

const title = ['A', 'B'] as const;

type categoryTypes1 = typeof title[number];

type recordGoods = Record<categoryTypes1, Goods2>;
const listGoods: recordGoods = {
    'A': {
        id: 3,
        title: 'C',
        price: 500,
    },
    'B': {
        id: 8,
        title: 'D',
        price: 500,
    }
}

type omitGoods = Omit<Goods2, 'id'> //исключаем id

type pickGoods = Pick<Goods2, 'price' | 'title'>

const getGoods = (title: string, price: number, count: number): Goods2 => {
    return {
        id: Math.floor(Math.random()*10e8),
        title,
        price,
        count,
    }
}

type goods = ReturnType<typeof getGoods>
type param = Parameters<typeof getGoods>[0];

const getGoodsFromServer = (): Promise<Goods2[]> => fetch('https://api.com')
.then((response: Response) => response.json());

type P = ReturnType<typeof getGoodsFromServer>;
type R = Awaited<ReturnType<typeof getGoodsFromServer>>;
import { product } from "./src/modules/product";
import { calcTotalPrice } from "./src/modules/calc";

const title: string = 'Car';
const price: number = 5000;
const count: number = 5;
const arrived: boolean = false;


// const calcTotalPrice = ( item: {
//     title:string, 
//     price: number, 
//     count: number
// }
// ): string => {
//     const totalPrice: number = item.price * item.count;
//     return `${item.title}: ${totalPrice}`;
// }

// const result = calcTotalPrice(product);



const result = calcTotalPrice(product);

// const calcTotalPrice = (
//     title:string, 
//     price: number, 
//     count: number
// ): string => {
//     const totalPrice: number = price * count;
//     return `${title}: ${totalPrice}`;
// }

// const result = calcTotalPrice(title, price, count);

// const totalPrice: number = product.price * product.count;
// console.log(totalPrice);

const city: string[] = ['A', 'B', 'C'];
const counter: number[] = [25, 14, 15];
const arr: (string | number | boolean)[] = [15, 'react', true];
const arrObj: {name: string, age: number}[] = [{name: 'A', age: 45}, {name: 'B', age: 27}];

// const route = city.filter(item => item !== 'A')
// .map(item => item.toLowerCase())
// .reduce((acc, item) => acc + ' ' + item);

const arrKortej: readonly [number, string, boolean] = [15, 'react', true];
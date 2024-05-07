"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./src/modules/product");
const calc_1 = require("./src/modules/calc");
const title = 'Car';
const price = 5000;
const count = 5;
const arrived = false;
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
const result = (0, calc_1.calcTotalPrice)(product_1.product);
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
const city = ['A', 'B', 'C'];
const counter = [25, 14, 15];
const arr = [15, 'react', true];
const arrObj = [{ name: 'A', age: 45 }, { name: 'B', age: 27 }];
// const route = city.filter(item => item !== 'A')
// .map(item => item.toLowerCase())
// .reduce((acc, item) => acc + ' ' + item);
const arrKortej = [15, 'react', true];

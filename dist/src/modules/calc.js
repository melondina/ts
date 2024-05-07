"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcTotalPrice = void 0;
const calcTotalPrice = ({ title, price, count, option: { distance } }) => {
    const totalPrice = price * count;
    const totalDistance = distance * count;
    return `${title}: ${totalPrice}; ${totalDistance}`;
};
exports.calcTotalPrice = calcTotalPrice;

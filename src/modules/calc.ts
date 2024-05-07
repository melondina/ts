export const calcTotalPrice = ( {
    title, 
    price, 
    count,
    option: {distance}
} : {
    title:string, 
    price: number, 
    count: number,
    option: {
        distance: number,
    }
}
): string => {
    const totalPrice: number = price * count;
    const totalDistance: number = distance * count;
    return `${title}: ${totalPrice}; ${totalDistance}`;
}
import { product } from './modules/product';
class Job {
    private role: string;
    private _salary: number;

    constructor(role: string, salary: number) {
        this.role = role;
        this._salary = salary;
    }

    get salary(): number {
        return this._salary;
    }

    work(personName: string): string {
        return `${personName} сейчас работает как ${this.role}`
    }
}

class Person {
    private _job?: Job;
    private personName: string;

    constructor(personName: string) {
        this.personName = personName;
    }

    set job(job: Job) {
        this._job = job;
    }

    getSalary(): number {
        if(this._job) {
            return this._job.salary;
        }
        return 0;
    }

    work(): string {
        if(this._job) {
            return `${this.personName} выполняет работу по ${this._job.work(this.personName)}`
        }
        return `${this.personName} ничего не делает`
    }
}

const job1 = new Job('тянуть', 1000);
const job2 = new Job('толкать', 1200);

const person1 = new Person('Иван');
const person2 = new Person('Мария');

person1.job = job1;
person2.job = job2;

console.log(person1.work());
console.log(person2.getSalary());
console.log(person1.job);

//--------//

class Product {
    _name: string;
    _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get price(): number {
        return this._price;
    }

    set price(price: number) {
        this._price = price;
    }
}

abstract class AbstractSelling {
    _product: Product;
    _count: number;

    constructor(product: Product, count: number) {
        this._product = product;
        this._count = count;
    }

    get product(): Product {
        return this._product;
    }

    set product(product: Product) {
        this._product = product;
    }

    get count(): number {
        return this._count;
    }

    set count(count: number) {
        this._count = count;
    }

    abstract getPrice(): number;

    compare(other: AbstractSelling): number {
        return other.getPrice() - this.getPrice();
    }
}

class DiscountSelling extends AbstractSelling {
    private discount: number = 10;

    constructor(product: Product, count: number) {
        super(product, count);
    }

    getPrice(): number {
        const priceAfterDiscount = this.product.price - this.discount;
        return parseFloat((priceAfterDiscount * this.count).toFixed(2));
    }
}

class BulkDiscountSelling extends AbstractSelling {
    private discountThreshold: number;

    constructor(product: Product, count: number, discountThreshold: number) {
        super(product, count);
        this.discountThreshold = discountThreshold;
    }

    getPrice(): number {
        let price = this.product.price * this.count;
        
        if (this.count >= this.discountThreshold) {
            price = price * 0.9;
        }

        return parseFloat(price.toFixed(2));
    }
}

const products: Product[] = [
    new Product("ProductA", 100),
    new Product("ProductB", 200),
    new Product("ProductC", 150),
    new Product("ProductD", 250)
];

const sellings: AbstractSelling[] = [
    new DiscountSelling(products[0], 3),
    new DiscountSelling(products[1], 5),
    new DiscountSelling(products[2], 2),
    new DiscountSelling(products[3], 10),
    new BulkDiscountSelling(products[0], 3, 5),
    new BulkDiscountSelling(products[1], 5, 3),
    new BulkDiscountSelling(products[2], 10, 10),
    new BulkDiscountSelling(products[3], 1, 2)
];

sellings.sort((a, b) => a.compare(b));

sellings.forEach(selling => {
    console.log(`Product: ${selling.product.name}, Quantity: ${selling.count}, Price: $${selling.getPrice()}`);
});

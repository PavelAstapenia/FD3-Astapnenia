class Product {
    name: string;
    scale: number;

    constructor(_name: string, _scale: number) {
        this.name = _name;
        this.scale = _scale
    }

    getName(): string {
        return this.name;
    }

    getScale(): number {
        return this.scale;
    }
}
// наследуем классы от Product
class Apple extends Product { }
class Tomato extends Product { }
// создаем класс Scales
class Scales {
    productArr: Array<Product>;

    constructor() {
        this.productArr = [];
    }

    add(_product: Product): void {
        this.productArr.push(_product);
    }

    getSumScale(): number {
        let sum: number = 0;
        for (let i: number = 0; i < this.productArr.length; i++) {
            sum = sum + this.productArr[i].getScale();
        }
        return sum;
    }

    getName(): Array<string> {
        let nameArr: Array<string> = [];
        for (let i: number = 0; i < this.productArr.length; i++) {
            nameArr.push(this.productArr[i].getName());
        }
        return nameArr;
    }

}
// создаем объекты
let apple1: Apple = new Apple("Golden prince", 10);
let apple2: Apple = new Apple("Green", 20);

let tomato1: Tomato = new Tomato("Holand", 30);
let tomato2: Tomato = new Tomato("Peach", 40);

let scale1: Scales = new Scales();

scale1.add(apple1);
scale1.add(apple2);

console.log('SumScale=' + scale1.getSumScale());
console.log('Name=' + scale1.getName());

scale1.add(tomato1);
scale1.add(tomato2);

console.log('SumScale=' + scale1.getSumScale());
console.log('Name=' + scale1.getName());

//***************  просто тест вывода в консоль, когда строка и знак плюс меняет выводимую информацию
console.log('Посмотрите выводит разные данные, если добавить строку в начале с плюсом в консоль лог')
console.log(scale1);
console.log('scale:' + scale1);
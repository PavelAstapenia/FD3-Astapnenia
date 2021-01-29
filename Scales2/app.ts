interface IScalable {
    getName(): string;
    getScale(): number;
}

class Apple implements IScalable {
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

class Tomato implements IScalable {
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

class Scales {
    productArr: Array<IScalable>;

    constructor() {
        this.productArr = [];
    }

    add(_product: IScalable): void {
        this.productArr.push(_product);
    }

    getSumScale(): number {
        let sum: number = 0;
        this.productArr.forEach((val: IScalable) => sum += val.getScale());
        return sum;
    }

    getName(): Array<string> {
        let nameArr: Array<string> = [];
        nameArr = this.productArr.map((val: IScalable) => val.getName());
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
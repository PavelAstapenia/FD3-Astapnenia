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

interface IStorageEngine {
    addItem(item: Product): void;
    getItem(index: number): Product;
    getCount(): number;
}

class Scales<StorageEngine extends IStorageEngine> {

    SE: StorageEngine = null;

    constructor(StorageEngine_: StorageEngine) {
        this.SE = StorageEngine_;
    }

    add(_product: Product): void {
        this.SE.addItem(_product);
    }

    getSumScale(): number {
        let sum: number = 0;
        let ArrLength: number = this.SE.getCount();
        for (let i: number = 0; i < ArrLength; i++) {
            sum += this.SE.getItem(i).getScale();
        }

        return sum;
    }

    getNameList(): Array<string> {
        let nameArr: Array<string> = [];
        let ArrLength: number = this.SE.getCount();
        for (let i: number = 0; i < ArrLength; i++) {
            nameArr.push(this.SE.getItem(i).getName());
        }

        return nameArr;
    }
}

class ScalesStorageEngineArray implements IStorageEngine {
    productArr: Array<Product>;
    // см 27 минуту видео
    constructor() {
        this.productArr = [];
    }

    addItem(_product: Product): void {
        this.productArr.push(_product);
    }

    getItem(index: number): Product {
        return this.productArr[index];
    }
    getCount(): number { return this.productArr.length; }

}


// создаем продукты
let product1: Product = new Product("Golden prince", 10);
let product2: Product = new Product("Green", 20);
let product3: Product = new Product("Holand", 30);
let product4: Product = new Product("Peach", 40);

// создаем весы со спсобом хранения в массиве
let scaleArr = new Scales<ScalesStorageEngineArray>(ScalesStorageEngineArray);

// добавляем продукты на вессы с массивом
scaleArr.add(product1);
scaleArr.add(product2);

console.log('SumScaleArr=' + scaleArr.getSumScale());
console.log('NameList=' + scaleArr.getNameList());

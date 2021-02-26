class Product {
    private name: string;
    private scale: number;

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

class ScalesStorageEngineLocalStorage implements IStorageEngine {
    LocalStorageKey: string = "Product";

    constructor() {
        localStorage.setItem(this.LocalStorageKey, '0');
    }

    addItem(_product: Product): void {
        let LSProduct: any[] = JSON.parse(localStorage.getItem(this.LocalStorageKey));
        if (LSProduct == ["0"]) {
            localStorage.setItem(this.LocalStorageKey, JSON.stringify([_product]));
            console.log("Done");
        } else {
            LSProduct.push(_product);
            localStorage.setItem(this.LocalStorageKey, JSON.stringify(LSProduct));
        }
    }

    getItem(index: number): Product {
        let LSProduct: any[] = JSON.parse(localStorage.getItem(this.LocalStorageKey));
        return new Product(LSProduct[index].name, LSProduct[index].scale);
    }

    getCount(): number {
        let LSProduct: any[] = JSON.parse(localStorage.getItem(this.LocalStorageKey));
        return LSProduct.length;
    }

}


// создаем продукты
let product1: Product = new Product("Golden prince", 10);
let product2: Product = new Product("Green", 20);
let product3: Product = new Product("Holand", 30);
let product4: Product = new Product("Peach", 40);

// создаем весы со спсобом хранения в массиве
let scaleArrEngine = new ScalesStorageEngineArray();
let scaleArr = new Scales<ScalesStorageEngineArray>(scaleArrEngine);

// добавляем продукты на вессы с массивом
scaleArr.add(product1);
scaleArr.add(product2);

console.log('SumScaleArr=' + scaleArr.getSumScale());
console.log('NameList=' + scaleArr.getNameList());

// создаем весы со спсобом хранения в local storage
let scaleLSEngine = new ScalesStorageEngineLocalStorage();
let scaleLS = new Scales<ScalesStorageEngineLocalStorage>(scaleLSEngine);

// добавляем продукты на вессы с массивом
scaleLS.add(product3);
scaleLS.add(product4);

console.log('SumScaleLS=' + scaleLS.getSumScale());
console.log('NameList=' + scaleLS.getNameList());

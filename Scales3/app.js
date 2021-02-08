var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.scale;
    };
    return Product;
}());
var Scales = /** @class */ (function () {
    function Scales(StorageEngine_) {
        this.SE = null;
        this.SE = StorageEngine_;
    }
    Scales.prototype.add = function (_product) {
        this.SE.addItem(_product);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        var ArrLength = this.SE.getCount();
        for (var i = 0; i < ArrLength; i++) {
            sum += this.SE.getItem(i).getScale();
        }
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var nameArr = [];
        var ArrLength = this.SE.getCount();
        for (var i = 0; i < ArrLength; i++) {
            nameArr.push(this.SE.getItem(i).getName());
        }
        return nameArr;
    };
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.productArr = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (_product) {
        this.productArr.push(_product);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.productArr[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () { return this.productArr.length; };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.LocalStorageKey = "Product";
        localStorage.setItem(this.LocalStorageKey, '0');
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (_product) {
        var LSProduct = JSON.parse(localStorage.getItem(this.LocalStorageKey));
        if (LSProduct == ["0"]) {
            localStorage.setItem(this.LocalStorageKey, JSON.stringify([_product]));
        }
        else {
            LSProduct.push(_product);
            localStorage.setItem(this.LocalStorageKey, JSON.stringify(LSProduct));
        }
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var LSProduct = JSON.parse(localStorage.getItem(this.LocalStorageKey));
        return new Product(LSProduct[index].name, LSProduct[index].scale);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var LSProduct = JSON.parse(localStorage.getItem(this.LocalStorageKey));
        return LSProduct.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
// создаем продукты
var product1 = new Product("Golden prince", 10);
var product2 = new Product("Green", 20);
var product3 = new Product("Holand", 30);
var product4 = new Product("Peach", 40);
// создаем весы со спсобом хранения в массиве
var scaleArrEngine = new ScalesStorageEngineArray();
var scaleArr = new Scales(scaleArrEngine);
// добавляем продукты на вессы с массивом
scaleArr.add(product1);
scaleArr.add(product2);
console.log('SumScaleArr=' + scaleArr.getSumScale());
console.log('NameList=' + scaleArr.getNameList());
// создаем весы со спсобом хранения в local storage
var scaleLSEngine = new ScalesStorageEngineLocalStorage();
var scaleLS = new Scales(scaleLSEngine);
// добавляем продукты на вессы с массивом
scaleLS.add(product3);
scaleLS.add(product4);
console.log('SumScaleLS=' + scaleLS.getSumScale());
console.log('NameList=' + scaleLS.getNameList());
//# sourceMappingURL=app.js.map
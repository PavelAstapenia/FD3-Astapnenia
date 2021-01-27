var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// наследуем классы от Product
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tomato;
}(Product));
// создаем класс Scales
var Scales = /** @class */ (function () {
    function Scales() {
        this.productArr = [];
    }
    Scales.prototype.add = function (_product) {
        this.productArr.push(_product);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        for (var i = 0; i < this.productArr.length; i++) {
            sum = sum + this.productArr[i].getScale();
        }
        return sum;
    };
    Scales.prototype.getName = function () {
        var nameArr = [];
        for (var i = 0; i < this.productArr.length; i++) {
            nameArr.push(this.productArr[i].getName());
        }
        return nameArr;
    };
    return Scales;
}());
// создаем объекты
var apple1 = new Apple("Golden prince", 10);
var apple2 = new Apple("Green", 20);
var tomato1 = new Tomato("Holand", 30);
var tomato2 = new Tomato("Peach", 40);
var scale1 = new Scales();
scale1.add(apple1);
scale1.add(apple2);
console.log('SumScale=' + scale1.getSumScale());
console.log('Name=' + scale1.getName());
scale1.add(tomato1);
scale1.add(tomato2);
console.log('SumScale=' + scale1.getSumScale());
console.log('Name=' + scale1.getName());
//***************  просто тест вывода в консоль, когда строка и знак плюс меняет выводимую информацию
console.log('Посмотрите выводит разные данные, если добавить строку в начале с плюсом в консоль лог');
console.log(scale1);
console.log('scale:' + scale1);
//# sourceMappingURL=app.js.map
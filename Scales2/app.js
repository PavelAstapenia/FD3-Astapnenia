var Apple = /** @class */ (function () {
    function Apple(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Apple.prototype.getName = function () {
        return this.name;
    };
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Tomato.prototype.getName = function () {
        return this.name;
    };
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    return Tomato;
}());
var Scales = /** @class */ (function () {
    function Scales() {
        this.productArr = [];
    }
    Scales.prototype.add = function (_product) {
        this.productArr.push(_product);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        this.productArr.forEach(function (val) { return sum += val.getScale(); });
        return sum;
    };
    Scales.prototype.getName = function () {
        var nameArr = [];
        nameArr = this.productArr.map(function (val) { return val.getName(); });
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
//# sourceMappingURL=app.js.map
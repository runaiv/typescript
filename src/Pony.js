var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Toy_1 = require("./Toy");
var Pony = (function (_super) {
    __extends(Pony, _super);
    function Pony() {
        _super.call(this);
        this.id = Pony._nb;
        Pony._nb += 1;
        this.ponyCalled();
    }
    Pony.prototype.ponyCalled = function () {
        console.log("Tony " + this.id++ + " is singing -->\n        Dou-double poney, j'fais izi money\n        D'o\u00F9 tu m'connais ? Parle moi en billets violets\n        Dou-double poney, j'fais izi money\n        ");
    };
    Pony.prototype.isMoved = function () {
        console.log("Huuuuuuhu !");
    };
    Pony._nb = 1;
    return Pony;
})(Toy_1["default"]);
exports["default"] = Pony;

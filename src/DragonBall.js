var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Figurine_1 = require("./Figurine");
var DragonBall = (function (_super) {
    __extends(DragonBall, _super);
    function DragonBall(name) {
        _super.call(this);
        this._character = name;
        this.DragonBallCalled();
    }
    DragonBall.prototype.DragonBallCalled = function () {
        console.log(this._character + " is singing -->\n        CHA-LA HEAD CHA-LA\n        Nani ga okite mo kibun wa heno-heno kappa\n        CHA-LA HEAD CHA-LA\n        Mune ga pachi-pachi suru hodo\n        Sawagu Genki-Dama --Sparking !");
    };
    DragonBall.prototype.isMoved = function () {
        console.log('Kamé Hamé Ha!');
    };
    return DragonBall;
})(Figurine_1["default"]);
exports["default"] = DragonBall;

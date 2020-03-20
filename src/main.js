var Pony_1 = require('./Pony');
var DragonBall_1 = require('./DragonBall');
// Step #1
console.log("--- STEP #1 ---");
var DBHeroe;
(function (DBHeroe) {
    DBHeroe[DBHeroe["SANGOKU"] = 'Sangoku'] = "SANGOKU";
    DBHeroe[DBHeroe["BEJITA"] = 'Bejita'] = "BEJITA";
    DBHeroe[DBHeroe["BEERUS"] = 'Beerus'] = "BEERUS";
    DBHeroe[DBHeroe["KAMESENNIN"] = 'Kamesennin'] = "KAMESENNIN";
})(DBHeroe || (DBHeroe = {}));
var pony = new Pony_1["default"]();
var goku = new DragonBall_1["default"](DBHeroe.SANGOKU);
pony.isMoved();
goku.isMoved();

import Toy from './Toy'
import Pony from './Pony'
import Figurine from './Figurine'
import DragonBall from './DragonBall'
import Elf from './Elf';
import Packaging from './Packaging';
import Box from './Box';
import GiftWrap from './GiftWrap';

// Step #1
console.log("--- STEP #1 ---");

enum DBHeroe {
    SANGOKU = 'Sangoku',
    BEJITA = 'Bejita',
    BEERUS = 'Beerus',
    KAMESENNIN = 'Kamesennin'
    }

const pony: Pony = new Pony();
const goku: DragonBall = new DragonBall(DBHeroe.SANGOKU);

pony.isMoved()
goku.isMoved()

// Step #2
console.log("--- STEP #2 ---")

const majdi: Elf = new Elf("makiboto")
const box: Packaging = new Box()
majdi.pack(box, goku)
box.open()
majdi.pack(box, goku)

const paper: Packaging = new GiftWrap()
majdi.pack(paper, pony)
majdi.pack(paper, pony)

// const toy: Toy = majdi.unpack(paper)
// console.log(toy === pony)
// try {
//   majdi.unpack(paper);
// } catch (e) {
//   console.log(e.message);
// }
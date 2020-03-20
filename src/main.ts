import Toy from './Toy'
import Pony from './Pony'
import Figurine from './Figurine'
import DragonBall from './DragonBall'

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
goku.isMoved();
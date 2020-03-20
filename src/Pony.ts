import Toy from "./Toy"

export default class Pony extends Toy{
    private static _nb: number = 1
    private id: number
    
    constructor() {
        super()
        this.id = Pony._nb
        Pony._nb += 1
        this.ponyCalled()
    }
    
    ponyCalled(){
        console.log(`Tony ${this.id++} is singing -->
        Dou-double poney, j'fais izi money
        D'où tu m'connais ? Parle moi en billets violets
        Dou-double poney, j'fais izi money
        `)
    }
    
    isMoved(){
        console.log(`Huuuuuuhu !`)
    } 
}  
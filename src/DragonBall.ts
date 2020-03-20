import Figurine from "./Figurine";


export default class DragonBall extends Figurine{
    private _character: string
   
    constructor(name:string){
        super()
        this._character = name
        this.DragonBallCalled()
    }

    DragonBallCalled(){
        console.log(`${this._character} is singing -->
        CHA-LA HEAD CHA-LA
        Nani ga okite mo kibun wa heno-heno kappa
        CHA-LA HEAD CHA-LA
        Mune ga pachi-pachi suru hodo
        Sawagu Genki-Dama --Sparking !`)
    }

    isMoved(){
        console.log('Kamé Hamé Ha!')
    }
}

import Packaging from "./Packaging"
import Toy from "./Toy"
import DragonBall from "./DragonBall"

export default class Elf{
    private _nickname: string

    constructor(name: string){
        this._nickname = name
        console.log(this._nickname)
    }

    pack(packagin: Packaging, toy: Toy){
        //console.log(toy)
        if(!packagin.getIsopen()){
            console.log(packagin.getIsopen())
            console.log('Sorry this package is not open')
        }
        else if(packagin.getToy() != null){
            console.log('Sorry this package already filled')
        }
        else{
            packagin.insert(toy)
            console.log(`Yeaaaah! Just packing the toy ${toy.constructor.name}`)
        }
    }

    unpack(packagin: Packaging){
        if(packagin.getIsopen() && packagin.getToy() == null){
            return packagin.getToy()
        }   
    }

    getNickname(){
        return this._nickname
    }

    setNickname(name: string){
        this._nickname = name
    }
}
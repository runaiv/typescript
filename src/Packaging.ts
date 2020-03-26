import Toy from "./Toy";

export default class Packaging{
    private isOpen: boolean = false
    private toy: Toy

    constructor(){
        this.toy = this.getToy()
    }

    open(){
        this.isOpen = true
    }

    insert(toy: Toy){
        this.toy = toy
        console.log(toy)
        this.isOpen = false
    }

    getIsopen(){
        return this.isOpen
    }
    
    getToy(){
        return this.toy
    }
}
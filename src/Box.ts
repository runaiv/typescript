import Packaging from "./Packaging";

export default class Box extends Packaging{

    constructor(){
        super()
        console.log(this.getToy())
    }
}
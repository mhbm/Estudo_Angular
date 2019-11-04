/*
class Spacecraft {
    constructor(public propulsor: string){
    }

    jumpIntoHyperspace() : void {
        console.log("PULANDO COM O " + this.propulsor);
    }
}
 
interface Containership {
    cargoContainer: number
}
 
interface Smugglership extends Containership {
    hiddenContainer: number
}

class MilleniumFalcon extends Spacecraft implements Smugglership {

    cargoContainer: number;
    hiddenContainer: number;

    constructor() {
        super('teste');
        this.cargoContainer = 4
    }

    jumpIntoHyperspace() {
        if (Math.random()>= 0.5) {
            super.jumpIntoHyperspace();
        } else {
            console.log("Failed");
        }
    }

    goodForTheJob(ship: Containership): boolean {
        return ship.cargoContainer > 2
    }
}
 
let falcon = new Spacecraft("TESTE"); 
falcon.jumpIntoHyperspace();

let millenium = new MilleniumFalcon();
millenium.jumpIntoHyperspace();
console.log(millenium.goodForTheJob(millenium));
*/
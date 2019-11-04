class Spacecraft {
    constructor (public propulsor: string) {}

    jumpIntoHyperspace() {
        console.log(`Entering the hyperspace with ${this.propulsor}`);
    }
}

interface ContainerShip {
    cargoContainer : number
}

export {Spacecraft, ContainerShip}
import {Spacecraft, ContainerShip} from './base-ships'
import {MilleniumFalcon} from './startfighters'

let ship  = new Spacecraft('teste');
ship.jumpIntoHyperspace();

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace();

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainer > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`)
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("PULANDO COM O " + this.propulsor);
    };
    return Spacecraft;
}());
var falcon = new Spacecraft("TESTE");
falcon.jumpIntoHyperspace();

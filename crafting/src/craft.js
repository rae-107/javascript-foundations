const Material = require("./material")

class Craft {
    constructor(craftObj) {
        this.name = craftObj.type
        this.materials = craftObj.materials
        this.completed = false
    }
    completeCraft() {
        this.completed = true
        return 'All done! It looks great!'
    }
    calculateProjectTotal() {
        var totalCraftPrice = this.materials[0].calculateMaterialCost() + this.materials[1].calculateMaterialCost()
        return totalCraftPrice
    }
}

module.exports = Craft;

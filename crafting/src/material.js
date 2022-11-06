class Material {
    constructor(name, pricePerUnit, amount, units) {
        this.name = name
        this.price = pricePerUnit
        this.amount = amount
        this.units = units
    }
    useMaterial(amountUsed) {
        if (this.amount > amountUsed) {
        this.amount -= amountUsed
        return `You now have ${this.amount} ${this.units} of ${this.name} left.`
        } 
        return `You don't have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    }
    calculateMaterialCost() {
        var totalPrice = this.price * this.amount
        return totalPrice
    }
}

module.exports = Material;

// const { test } = require("mocha")

class Dragon {
    constructor(name, rider) {
        this.name = name;
        this.rider = rider;
        this.hungry = true;
        this.meal = 1;
        console.log(this.meal)
        console.log(this.hungry)
    }
    eat() {
        var foodBreak = this.meal++
        if (foodBreak === 3) {
        this.hungry = false;
        } 
        console.log(this.meal)
        console.log(this.hungry)
    }
    greet() {
        return `Hi, ${this.rider}!`
    }
}

// Dragon.eat();

module.exports = Dragon;
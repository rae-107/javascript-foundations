var Person = require('./person');
var Statue = require('./statue');


class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = []
    }
    gazeAtVictim(statue) {
        var statue1 = new Statue(statue.name)
        this.statues.push(statue1)
        if (this.statues.length > 3) {
            var freedStatue = this.statues.shift(statue.name)
            var person1 = new Person(freedStatue.name)
            person1.mood = 'relieved';
            return person1
        }
    }
}









var medusaNamedRae = new Medusa('Rae')

var medusaNamedTomas = new Medusa('Tomas')






module.exports = Medusa;


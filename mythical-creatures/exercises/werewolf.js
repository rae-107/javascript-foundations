var Victim = require('./victim');

class Werewolf {
    constructor(name) {
        this.name = name;
        this.form = 'human';
        this.hungry = false;
        console.log(this.form)
    }
    completeTransformation() {
        if(this.form === 'human') {
            this.form = 'wolf';
            this.hungry = true;
            return 'Aaa-Woooo!'
        } else {
            this.form = 'human';
            this.hungry = false;
            return 'Where are I?'
        }   
    }
    eatVictim(victim) {
        if(this.form === 'human') {
            victim.alive = true
            return `No way am I eating ${victim.name}, I'd like a burger!`
        } else {
            victim.alive = false;
            this.form = 'human'
            return `Yum, ${victim.name} was delicious.`
        }
    }
}




module.exports = Werewolf;
class Pirate {
    constructor(name, job) {
        this.name = name;
        this.job = job || "scallywag";
        this.cursed = false;
        this.booty = 0;
        console.log(this.booty)
        console.log(this.cursed)
    }
    robShip() {
        if(this.booty === 500) {
            this.cursed = true;
            return 'ARG! I\'ve been cursed!'
        }
        this.booty += 100
        return 'YAARRR!'
    }
    liftCurse() {
        if(this.cursed === true) {
            this.cursed = false;
            this.booty = 200;
            return 'Your curse has been lifted!'
            
        } else {
            return 'You don\'t need to lift a curse!'
        }
    
    
        
    }
}

// this.booty -= 300
// if(this.booty === 200 && this.cursed === true) {
//     this.cursed = false;
//     return 'Your curse has been lifted!'
// } else {
//     return 'You don\'t need to lift a curse!'
// }





module.exports = Pirate;
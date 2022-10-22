class Centaur {
    constructor(centaurObject) {
        this.name = centaurObject.name;
        this.breed = centaurObject.type;
        this.cranky = false;
        this.standing = true;
        this.layingDown = false;
        this.crankyMeter = 0;
        
    }
    shootBow() {
        this.crankyMeter++
        if(this.crankyMeter >= 3 || this.standing === false) {
            this.cranky = true;
            return 'NO!'
        } else if (this.crankyMeter < 3) {
            return 'Twang!!!'
        } 
    }
    run() {
        this.crankyMeter++
        if (this.crankyMeter >= 3 || this.standing === false) {
            this.cranky = true;
            return 'NO!'
        } else if (this.crankyMeter < 3) {
            return `Clop clop clop clop!!!`
        }
    }
    sleep() {
        if (this.standing === false) {
            this.crankyMeter = 0;
            this.cranky = false;
            return 'ZZZZ'
        } else if(this.standing === true) {
            return 'NO!'
        } 
    }
    layDown() {
        this.standing = false;
        this.layingDown = true;
    }
    standUp() {
        this.standing = true;
        this.layingDown = false;
    }
    drinkPotion() {
        if (this.standing === false) {
            return 'Not while I\'m laying down!'
        } else {
            this.cranky = false;
        }
    }
}














module.exports = Centaur;
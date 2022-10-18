class Vampire {
    constructor(name, pet) {
        this.name = name;
        this.thirsty = true;
        this.ouncesDrank = 0;
        if (pet === undefined) {
            this.pet = 'bat'
        } else {
            this.pet = pet;
        }
    }
    drink() {
        if(this.ouncesDrank === 50) {
          return `I\'m too full to drink anymore!`
        }
        this.thirsty = false;
        this.ouncesDrank += 10
        console.log(this.ouncesDrank)
        console.log(this.thirsty)
    }
}









module.exports = Vampire;
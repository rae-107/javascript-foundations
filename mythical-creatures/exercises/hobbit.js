class Hobbit {
    constructor(name) {
        this.name = name.name;
        this.age = 0;
        this.adult = false;
        this.old = false;
        this.hasRing = false;
        console.log(this.name)
        console.log(this.age)
        console.log(this.adult)

    }
    celebrateBirthday() {
        this.age++
        if(this.age >= 33) {
            this.adult = true;
        } else {
            this.adult = false;
        }
        if(this.age >= 101) {
            this.old = true;
        } else {
            this.old = false;
        }
    }
    getRing() {
        if (this.name === 'Frodo') {
            this.hasRing = true;
            return 'Here is the ring!'
        } else {
            this.hasRing = false;
            return 'You can\'t have it!'
        }
    }
}







module.exports = Hobbit;
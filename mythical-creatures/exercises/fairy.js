class Fairy {
    constructor(name) {
        this.name = name;
        this.dust = 10
        this.clothes = {dresses: ['Iris',]}
        this.disposition = 'Good natured'
        this.humanWards = []
    }
    receiveBelief() {
        this.dust += 1
    }
    believe() {
        this.dust += 10
    }
    makeDresses(flowersArray) {
        for (var i = 0; i < flowersArray.length; i++) {
            this.clothes.dresses.push(flowersArray[i])
        }
    }
    becomeProvoked() {
        this.disposition = 'Vengeful'
    }
    replaceInfant(infantObj) {
        if (this.humanWards < 3) {
            infantObj.disposition = 'Malicious'
            this.humanWards.push(infantObj)
            return infantObj
        } else {
            infantObj.disposition = 'Malicious'
            this.humanWards.push(infantObj)
            this.disposition = 'Good natured'
        }
    }
}

module.exports = Fairy
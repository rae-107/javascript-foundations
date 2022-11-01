class Ogre {
    constructor(ogreObj) {
        this.name = ogreObj.name
        this.home = ogreObj.abode || 'Swamp'
        this.swings = 0
    }
    encounter(human) {
        human.encounterCounter++
        console.log(human.encounterCounter)
        if (human.encounterCounter === 2) {
            this.swingAt()
        } 
        else if (human.encounterCounter === 6) {
            this.swingAt()
            human.knockedOut = true
        }
    }
    swingAt(human) {
        this.swings++
    }
    apologize(human) {
        human.knockedOut = false
    }
}


module.exports = Ogre
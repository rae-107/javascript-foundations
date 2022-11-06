const Direwolf = require("./direwolf")

class Stark {
    constructor(starkObj) {
        this.name = starkObj.name
        this.location = starkObj.area || 'Winterfell'
        this.safe = false
    }
    sayHouseWords() {
        if(this.safe === true) {
            return 'The North Remembers'
        } else {
            return 'Winter is Coming'
        }
    }
    callDirewolf(name, home) {
        var direwolf = new Direwolf(name, this.location)
        var stark = new Stark({name: 'Arya', area: 'Riverlands'})
        // this.safe = true
        // direwolf1.starksToProtect.push(stark1)
        direwolf.protect(stark)
        this.safe = true

        return direwolf  
    }
}



module.exports = Stark
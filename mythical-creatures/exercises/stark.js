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
        var direwolf1 = new Direwolf(name, this.location)
        var stark1 = new Stark({name: 'Arya', area: 'Riverlands'})
        this.safe = true
        direwolf1.starksToProtect.push(stark1)

        return direwolf1  
        // console.log(this.starkObj)
        // return direwolf.protect()
    }
}



module.exports = Stark
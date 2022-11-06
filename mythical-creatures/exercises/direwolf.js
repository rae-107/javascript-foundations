class Direwolf {
    constructor(name, home, size) {
        this.name = name
        this.home = home || 'Beyond the Wall'
        this.size = size || 'Massive'
        this.starksToProtect = []
        this.huntsWhiteWalkers = true
    }
    protect(starkObj) {
        if(this.starksToProtect.length < 2 && starkObj.location === this.home) {        
            console.log(starkObj.location)
            starkObj.safe = true
            this.huntsWhiteWalkers = false
            this.starksToProtect.push(starkObj)
        }
    }
    leave(starkObj) {
        this.starksToProtect.pop(starkObj)
        starkObj.safe = false
    }
}



module.exports = Direwolf

// this.home === starkObj.location && 
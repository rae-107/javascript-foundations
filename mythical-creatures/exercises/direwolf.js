class Direwolf {
    constructor(name, home, size) {
        this.name = name
        this.home = home || 'Beyond the Wall'
        this.size = size || 'Massive'
        this.starksToProtect = []
        this.huntsWhiteWalkers = true
    }
    protect(starkObj) {
        if(this.home === starkObj.location && this.starksToProtect.length < 2) {
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
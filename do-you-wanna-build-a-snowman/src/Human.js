var Snowman = require('./Snowman');

class Human {
    constructor(name) {
        this.name = name
        this.wantsToBuildASnowman = true
        this.materials = {
            snowballs: 0,
            coal: 0,
            buttons: 0,
            carrots: 0
          };
    }
    gatherMaterials(materialType, materialAmount) {
        if(materialType === 'snowballs') {
            this.materials.snowballs += materialAmount
        } else if(materialType === 'coal') {
            this.materials.coal += materialAmount
        } else if(materialType === 'buttons') {
            this.materials.buttons += materialAmount
        } else if(materialType === 'carrots') {
            this.materials.carrots += materialAmount
        }
    }
    buildASnowman() {
        var snowman = new Snowman(this.materials)
        return snowman
    }
    placeMagicHat(snowman) {
        if(this.materials.coal === 0 || this.materials.buttons === 0) {
            snowman.magicHat = false
            return 'I guess I didn\'t build it correctly.'
        }
        snowman.magicHat = true
        return 'Woah, this snowman is coming to life!'
    }
}

module.exports = Human;
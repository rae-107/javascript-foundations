class GolfCourse {
    constructor(name, difficulty, openings, features) {
        this.name = name
        this.difficulty = difficulty
        this.openings = openings
        this.features = features
        this.currentlyPlaying = []
    }
    checkInGroup(groups) {
        if (this.openings > groups.length) {
        this.openings -= groups.length
        for (var i = 0; i < groups.length; i++) {
            this.currentlyPlaying.unshift(groups[i].name)
        } return 'You\'re checked in. Have fun!'
        } else if (this.openings < groups.length) {
            return 'Sorry, we are currently booked! Please come back later.'
        }

    }

}

module.exports = GolfCourse;

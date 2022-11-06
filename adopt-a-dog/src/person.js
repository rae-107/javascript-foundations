var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name
    this.dog = dog
  }
  fillFoodBowl() {
    this.dog.eat()
  }
  throwBall() {
    this.dog.fetchBall()
    return `${this.dog.name} loves playing fetch!`
  }
  introduceNewFriends(newDog) {
    this.dog.friends.push(newDog.name)
  }
  adoptAPup(dogName, dogAge) {
    if (!this.dog) {
      var rocky = new Dog({name: dogName, age: dogAge})
      this.dog = rocky
    } else {
      return `You can\'t adopt ${dogName}. You already have ${this.dog.name}!`
    }
  }
}

module.exports = Person;

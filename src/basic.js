//module.exports = 
class Person {
    constructor(name, age, gender, interests, bio) {
        console.log(`A new Person has been created!`)
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.bio = bio;
    }

    speak() {
        console.log(`Hello , my name is ${this.name} and i am a ${this.gender} RoboHuman hybrid.
                   I am ${this.age} in human years .
                   My interets include ${this.interests}
                   Bio : ${this.bio}`);


    }
}
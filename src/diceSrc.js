// This function can create a die with any number of sides

class DiceFactory {
    constructor(sides) {
        this.sides = sides;
    }
    makeDie() {
        return (Math.floor(Math.random() * this.sides) + 1);
    }
}

//test die

class DiceTester {
    constructor(dieType) {
        this.dieType = dieType;    //it could be any type of die
        this.tally = [];           //stores the number of time a die lands on a specific side
        this.mean = ((this.dieType * 1000) * 0.05); // mean accepted  for a die to be fair
        this.min = 1000 - this.mean;
        this.max = 1000 + this.mean;
    };
    testDie(testingDie) {
        for (let i = 0; i < this.dieType; i++) {
            this.tally[i] = 0;
        };
        if (this.dieType !== testingDie.sides) {
            throw Error('the wrong type of die have been input');
        };
        for (let i = 0; i < this.dieType * 1000; i++) {     //if a die has 6 sides, the die will be rolled 6000 time to test the randomness of the each side
            let roll = testingDie.makeDie();               // every roll is tallied
            this.tally[roll - 1]++;
        }
        for (let i = 0; i < this.tally.length; i++) {       //the function checks the minimum and maximum time a side is rolled
            if (this.tally[i] < this.min || this.tally[i] > this.max) {
                throw Error('die is not fair');
            }
        }
        return true;
    }
};


let diceFactory = new DiceFactory(6);
console.log(diceFactory.makeDie());
let diceTester = new DiceTester(6);
console.log(diceTester.testDie(diceFactory));

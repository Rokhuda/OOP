// make any type of die

class DiceFactory {
    constructor(sides) {
        this.sides = sides;
    }
    makeDie() {
        return (Math.floor(Math.random * this.sides) + 1);
    }
}

let diceFactory = new DiceFactory(6);
console.log(diceFactory.makeDie());

//test die

class DiceTester{
    constructor(dieType) {
        this.dieType = dieType;
        this.tally = [];
    }

    testDie(testingDie) {
        let diceFactory = new DiceFactory();
    
        for (let i = 0; i < this.dieType; I++) {
            this.tally[i] = 0;

        }

    if (this.dieType !== testingDie.sides) {
        throw Error('')
    }
    for (let i = 0; i < this.dieType * 1000; i++){
        let roll = testingDie.makeDie();
        this.tally[roll - 1]++;

    }
        for (let i = 0; i < this.tally.length; i++){
            let mean = ((this.dieType * 1000) * 0.05);
            let min = 1000 - this.mean;
            let max = 1000 + max;
            if (this.tally[i] < this.min || this.tally[i] > this.max) {
                throw Error('die is not fair')
                }
        }
        return true;
        }
} 
let diceTester = new DiceTester();
diceTester.testDie();

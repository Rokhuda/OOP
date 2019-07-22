 describe("die making", () => {
     it("should make any type of die", () => {
         let diceFactory = new DiceFactory(6);
         diceFactory.makeDie(6);
         expect(diceFactory.sides).toEqual(6);
     });
 });

describe("die testing", () => {
     it("should return true if dice is fair", () => {
         let diceTester = new DiceTester(6);
         expect(diceTester.testDie(diceFactory)).toBeTruthy(true);
     });

 });
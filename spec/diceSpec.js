 describe("dice", () => {
    it("should make a any type of die", () => {
        let diceFactory = new DiceFactory(6);
        diceFactory.makeDie(6);
        expect(diceFactory.sides.length).toEqual(6);
    });
    it("should return true if dice is fair", () => {
        let diceTester = new DiceTester();
        expect(diceTester.testDie()).toBeTruthy();
    });
}); 
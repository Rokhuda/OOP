class BankAccount {
    constructor(accountOwner, type, accountNum, balance, fee, interest) {
        this.accountOwner = accountOwner;
        this.type = type;
        this.accountNum = accountNum;
        this.fee = fee;
        this.balance = balance;
        this.interest = interest;
    }
    accountInformation() {
        return `The Owner of this account is ${this.accountOwner} ,  account type is ${this.type},
      and has an account number of: ${this.accountNum},
      the banking fees for this account is R${this.fee} ,
      and the current balance is R${this.balance},
     with an interest rate of ${this.interest} percent
   `
    }
}
let person_1 = new BankAccount('Rokhuda', 'Savings',131143445, 77777, 5665, 12);
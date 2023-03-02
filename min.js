class PKBank{
    constructor(Balance){
        this._balance =Balance;
    }
    withdraw(Amount){
        if(Amount <=this._balance){
            return this._balance -= Amount;
        }
        return `Insufficent Funds`;
    }
}
const personA =new PKBank(1000);
let firstWithdraw =personA.withdraw(700);
console.log(firstWithdraw)

let secondWithDraw =  personA.withdraw(400);
console.log(secondWithDraw);
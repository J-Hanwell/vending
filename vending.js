class VendingMachine {
    constructor() {
        this.credit = 0;
        this.stock = {
            A: {},
            B: {},
            C: {},
            D: {},
        };
    

    }

    addStock(item, position) {
        this.stock[position] =  item;
    };

    addCredit(amount) {
        this.credit += amount
    };

    purchaseItem(position) {
        if (this.credit >= this.stock[position].price) {
        this.stock[position].quantity --;
        this.credit -= this.stock[position].price;
        return this.stock[position].name
        }
        else return "Insufficient credit!"
        
    }
}
const marsBars = { name: "marsBar", price: 50, quantity: 6 };
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, "A");
console.log(testMachine.stock);

console.log(testMachine.credit); // 0
testMachine.addCredit(50);
console.log(testMachine.credit); // 50
testMachine.addCredit(10);
console.log(testMachine.credit); // 60;


const testMachine2 = new VendingMachine();
testMachine2.addStock(marsBars, "A");
testMachine2.addCredit(30);
console.log(testMachine2.purchaseItem("A")); // returns 'Insufficient credit!'
console.log(testMachine2.stock);


const testMachine3 = new VendingMachine();
testMachine3.addStock(marsBars, "A");
testMachine3.addCredit(60);
console.log(testMachine3.purchaseItem("A")); // returns 'marsBar'
console.log(testMachine3.stock);
/**
{ A: { name: 'marsBar', price: 50, quantity: 5 },
  B: {},
  C: {}
}
 **/
testMachine.credit; // 10

//assumptions
//spelling is not off
//did not account for edge cases
//
var Product = {
  a1: {product: 'coca-cola', count: 5, cost: 1.25},
  a2: {product: 'pepsi',  count: 5, cost: 1.25},
  a3: {product: 'water',  count: 5, cost: 1.00},
  b1: {product: 'cheetos',  count: 5, cost: 1.50},
  b2: {product: 'doritos',  count: 5, cost: 1.50},
  b3: {product: 'lays',  count: 5 , cost: 1.50},
  c1: {product: 'snickers',  count: 5 , cost: 0.75},
  c2: {product: 'kit-kat',  count: 5, cost: 0.75},
  c3: {product: 'twix',  count: 5, cost: 0.75}
};

var Money = {
  dollar: 1.00,
  quarter: 0.25,
  dime: 0.10,
  nickel: 0.05
};


function VendingMachine(name) {
  this.amount = 0;
  console.log('vending machine has been made');
  console.log(Product);
  console.log('Balance $' + this.amount);
}

VendingMachine.prototype.insertMoney = function(type) {
  for (var i in Money) {
    if (Money[type]) {
      this.amount += Money[type];
      return console.log('Balance: ' + this.amount);
    }
  }
};

VendingMachine.prototype.buyProduct = function(option, money) {
  for(var i in Product) {
    if (Product[option].count > 0 && this.amount > Product[option].cost) {
      Product[option].count--;
      this.amount -= Product[option].cost;
      console.log('Purchasing: ' + Product[option].product);
      console.log('Balance: $' + this.amount);
      return; 
    } else if(this.amount < Product[option].cost) {
      console.log('Balance: $' + this.amount);
      console.log('Insufficient Funds');
      return;
    }
      else {
      return console.log(Product[option].product + ' is sold out');
    }
  }
};

VendingMachine.prototype.refillProduct = function(option) {
  for(var i in Product) {
    if (Product[option]) {
      Product[option].count = 5;
    }
  }
  return console.log(Product[option].product + ' has been refilled');
};

VendingMachine.prototype.getChange = function() {
  var change = [];
  var total = 0;
  var amount = this.amount;
  [0.25, 0.10, 0.05].forEach(function(coin) {
    while (total + coin <= amount) {
      change.push(coin);
      total += coin;
    }
  });
  return change;
};
var a = new VendingMachine()
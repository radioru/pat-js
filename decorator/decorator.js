'use strict'

/**
 * Decorator pattern implementation
 */

var _version = 1;

function Beverage(cost, description) {
    this.cost = cost;
    this.description = description;
}
Beverage.prototype.getCost = function () {
    return this.cost;
}
Beverage.prototype.getDescription = function () {
    return this.description;
}

var coffee = new Beverage(1,'Medelin roasted');

function ToppingDecorator(beverage) {
    this.beverage = beverage;
    this.cost = 1;
    this.description = 'milk';
    this.getCost = function () {
        return this.beverage.getCost() + this.cost;
    }
    this.getDescription = function () {
        return this.beverage.getDescription() + ' with ' + this.description;
    }
}

console.log(coffee.getDescription(), coffee.getCost());
var mk = new ToppingDecorator(coffee);
console.log(mk.getCost(), mk.getDescription());
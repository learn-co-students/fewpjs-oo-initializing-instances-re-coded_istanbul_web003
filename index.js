// Write your code here
//Breakfast class
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}
//New instance and arguments of breakfast class
let bfast = new Breakfast("eggs", "juice");

//Lunch class
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}
//New instance and arguments of lunch class
let newlunch = new Lunch("side salad", "broccoli cheddar soup", "iced tea");

//Dinner class
class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = dessert;
  }
}
//New instance and arguments of dinner class includes a private property
let newdinner = new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake');





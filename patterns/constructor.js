function Car(model, year, miles) {
    this.model = model
    this.year = year
    this.miles = miles
}

Car.prototype.toString = function() {
    return `${this.model} (${this.year}) has done ${this.miles} miles`
}

console.log(new Car('Hona Civic', 2014, 15).toString())

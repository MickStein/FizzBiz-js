class Javabuzz {
  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }

  says(number) {
    if (this.isDivisibleByThree(number)) {
      return "Java";
    }
  }

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }
  
  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }
}

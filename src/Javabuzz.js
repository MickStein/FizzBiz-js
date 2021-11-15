class Javabuzz {
  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }
  
  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }
}

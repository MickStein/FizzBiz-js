class Javabuzz {
  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }

  says(number) {
    if (this.isDivisibleByFifteen(number)) {
      return "JavaBuzz";
    }
    if (this.isDivisibleByThree(number)) {
      return "Java";
    }
    if (this.isDivisibleByFive(number)) {
      return "Buzz";
    }
    return number;
  }

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }
  
  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }

  logNumbers() {
    let index = 0;
    let currentNumber;

    while (index <= 100) {
      currentNumber = this.says(index);
      console.log(currentNumber);
      index++;
    }
  }
}

describe('Javabuzz', function() {
  let javabuzz;
  beforeEach(function() {
    javabuzz = new Javabuzz();
  });


  describe('knows when a number is', function() {
    it('divisible by 15', function () {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 15', function () {
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });
});
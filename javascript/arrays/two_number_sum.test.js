const twoNumberSum = require('./two_number_sum')

describe("twoNumberSum", () => {
  describe("when Input array is [3, 5, -4, 8, 11, 1, -1, 6]", () => {
    describe("and targetSum is 10", () => {
      it("should return [-1, 11]", () => {
        const input = [3, 5, -4, 8, 11, 1, -1, 6];
        const targetSum = 10;

        const output = twoNumberSum(input, targetSum);

        expect(output).toEqual([-1, 11]);
      });
    });
  });
});

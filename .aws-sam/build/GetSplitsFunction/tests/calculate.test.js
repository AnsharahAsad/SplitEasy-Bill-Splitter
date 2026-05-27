const { calculateSplit } = require("../src/calculate");

test("splits equally among 3 people", () => {
  const result = calculateSplit(90, ["Ali", "Sara", "Usman"]);

  expect(result).toEqual([
    { name: "Ali", owes: 30 },
    { name: "Sara", owes: 30 },
    { name: "Usman", owes: 30 }
  ]);
});

test("total of 0 gives each person 0", () => {
  const result = calculateSplit(0, ["Ali", "Sara"]);

  expect(result).toEqual([
    { name: "Ali", owes: 0 },
    { name: "Sara", owes: 0 }
  ]);
});

test("single person owes full amount", () => {
  const result = calculateSplit(100, ["Ali"]);

  expect(result).toEqual([
    { name: "Ali", owes: 100 }
  ]);
});

test("floating point bill rounds to 2 decimal places", () => {
  const result = calculateSplit(10.99, ["Ali", "Sara", "Usman"]);

  expect(result).toEqual([
    { name: "Ali", owes: 3.66 },
    { name: "Sara", owes: 3.66 },
    { name: "Usman", owes: 3.66 }
  ]);
});

test("throws error for empty people list", () => {
  expect(() => calculateSplit(100, [])).toThrow("No people provided");
});

test("throws error for negative amount", () => {
  expect(() => calculateSplit(-50, ["Ali"])).toThrow("Amount cannot be negative");
});

test("deduplicates duplicate names", () => {
  const result = calculateSplit(100, ["Ali", "Ali", "Sara"]);

  expect(result).toEqual([
    { name: "Ali", owes: 50 },
    { name: "Sara", owes: 50 }
  ]);
});
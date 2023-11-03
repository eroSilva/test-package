import { sum } from "./sum";

test("sums two numbers correctly", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});

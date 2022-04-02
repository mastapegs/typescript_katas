import { test_function } from "./default_file";

describe("default test", () => {
  it("should work", () => {
    expect(test_function()).toEqual("works");
  });
});

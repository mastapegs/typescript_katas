import { boolToWord } from "./bool_to_word";

describe("boolToWord", () => {
  it("should work", () => {
    expect(boolToWord(true)).toEqual("Yes");
    expect(boolToWord(false)).toEqual("No");
  });
});

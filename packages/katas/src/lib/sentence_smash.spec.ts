import { smash } from "./sentence_smash";

describe("smash", () => {
  it("Should return empty string for empty array.", () => {
    expect(smash([])).toEqual("");
  });

  it("One word example should return the word.", () => {
    expect(smash(["hello"])).toEqual("hello");
  });

  it("Multiple words should be separated by spaces.", () => {
    expect(smash(["hello", "world"])).toEqual("hello world");
    expect(smash(["hello", "amazing", "world"])).toEqual("hello amazing world");
    expect(
      smash(["this", "is", "a", "really", "long", "sentence"]),
    ).toEqual("this is a really long sentence");
  });
});

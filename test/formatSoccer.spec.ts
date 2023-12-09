import { Matches } from "../types";
import { formatScore } from "../utils/formatSoccer";

describe("formatScore", () => {
  test("returns correct score for soccer", () => {
    const match: Matches = { sport: "soccer", score: "4:1" };
    expect(formatScore(match)).toBe("4:1");
  });

  test("returns correct score for tennis", () => {
    const match: Matches = { sport: "tennis", score: "6:2,6:7,4:6,6:7" };
    expect(formatScore(match)).toStrictEqual(
      "Main score: 6:2 (set1 6:7, set2 4:6, set3 6:7)"
    );
  });

  test("returns correct score for basketball", () => {
    const match: Matches = {
      sport: "basketball",
      score: [
        ["24", "35"],
        ["27", "15"],
      ],
    };
    expect(formatScore(match)).toBe("24,35,27,15");
  });

  test("returns correct score for invalid sport", () => {
    const match: Matches = { sport: "invalidSport", score: "1:0" };
    expect(formatScore(match)).toBe("Exception: invalid sport");
  });
});

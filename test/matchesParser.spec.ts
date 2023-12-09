import { matches } from "../data/matches";
import { matchesParser } from "../utils/matchesParser";

describe("Match Processing", () => {
  test("processes matches correctly", () => {
    const matchesParsed = matchesParser(matches);

    expect(matchesParsed).toHaveLength(5);
    expect(matchesParsed[0]).toStrictEqual({
      name: "Chelsea - Arsenal",
      score: "2:1",
    });

    expect(matchesParsed[1]).toStrictEqual({
      name: "Germany - France",
      score: "Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)",
    });

    expect(matchesParsed[2]).toStrictEqual({
      name: "Pogoń Szczeciń vs Azoty Puławy",
      score: "34:26",
    });

    expect(matchesParsed[3]).toStrictEqual({
      name: "GKS Tychy - GKS Katowice",
      score: "9:7,2:1,5:3,9:9",
    });

    expect(matchesParsed[4]).toStrictEqual({
      name: "Maria Sharapova vs Serena Williams",
      score: "Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)",
    });

    const invalidSportMatch = matchesParsed.find(
      (match) => match.name === "Exception: invalid sport"
    );
    expect(invalidSportMatch).toBeUndefined();
  });
});

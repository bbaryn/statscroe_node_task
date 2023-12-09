import { Matches } from "../types";
import { makeEventName } from "../utils/makeEventName";

describe("makeEventName", () => {
  test("returns correct event name for soccer", () => {
    const match: Matches = {
      sport: "soccer",
      participant1: "TeamA",
      participant2: "TeamB",
    };
    expect(makeEventName(match)).toBe("TeamA - TeamB");
  });

  test("returns correct event name for tennis", () => {
    const match: Matches = {
      sport: "tennis",
      participant1: "Player1",
      participant2: "Player2",
    };
    expect(makeEventName(match)).toBe("Player1 vs Player2");
  });

  test("returns correct event name for invalid sport", () => {
    const match: Matches = {
      sport: "invalidSport",
      participant1: "TeamC",
      participant2: "TeamD",
    };
    expect(makeEventName(match)).toBe("Exception: invalid sport");
  });
});

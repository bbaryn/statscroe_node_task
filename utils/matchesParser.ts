import { Matches } from "types";
import { formatScore } from "./formatSoccer";
import { makeEventName } from "./makeEventName";

export const matchesParser = (matches: Matches[]) =>
  matches
    .map((match) => {
      const name = makeEventName(match);
      const score = formatScore(match);

      return {
        name,
        score,
      };
    })
    .filter(
      ({ name, score }) =>
        name !== "Exception: invalid sport" &&
        score !== "Exception: invalid sport"
    );

import { matches } from "./data/matches";
import { formatScore } from "./utils/formatSoccer";
import { makeEventName } from "./utils/makeEventName";

const matchesParsed = matches
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

console.log(matchesParsed);

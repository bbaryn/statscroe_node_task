import { matches } from "./data/matches";
import { formatScore } from "./utils/formatSoccer";
import { makeEventName } from "./utils/makeEventName";

let matchesParsed = [];

for (var i = 0; i < matches.length; i++) {
  const name = makeEventName(matches[i]);
  const score = formatScore(matches[i]);

  if (
    name !== "Exception: invalid sport" &&
    score !== "Exception: invalid sport"
  ) {
    matchesParsed.push({
      name,
      score,
    });
  }
}

console.log(matchesParsed);

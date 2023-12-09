import { Matches } from "types";

export const makeEventName = (match: Matches) => {
  switch (match.sport) {
    case "soccer":
    case "volleyball":
    case "basketball":
      return `${match.participant1} - ${match.participant2}`;
    case "tennis":
    case "handball":
      return `${match.participant1} vs ${match.participant2}`;
    default:
      return "Exception: invalid sport";
  }
};

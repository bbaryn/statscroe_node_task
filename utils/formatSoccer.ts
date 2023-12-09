import { Matches } from "../types";

export const formatScore = (match: Matches) => {
  switch (match.sport) {
    case "soccer":
    case "handball":
      return match.score;

    case "tennis":
    case "volleyball":
      const scores =
        /([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/.exec(
          match.score as string
        );
      const set1 = scores[2];
      const set2 = scores[3];
      const set3 = scores[4];

      return `Main score: ${scores[1]} (set1 ${set1}, set2 ${set2}, set3 ${set3})`;

    case "basketball":
      return `${match.score[0][0]},${match.score[0][1]},${match.score[1][0]},${match.score[1][1]}`;

    default:
      return "Exception: invalid sport";
  }
};

import { startPoints } from "./constants";
import { Player } from "./player";

export type BoardPosition = {
  players: Player[];
  safezone: boolean;
};

const boardSlots = 52;

function create() {
  const boardPositions: BoardPosition[] = Array(boardSlots).fill({
    player: [],
    safezone: true,
  });

  for (const color in startPoints) {
    const start = startPoints[color];
    boardPositions[start].safezone = true;
    boardPositions[start + 8].safezone = true;
  }

  return {
    boardPositions,
  };
}

export default Object.freeze({
  create,
});

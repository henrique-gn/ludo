import board, { BoardPosition } from "./board";
import player, { Player } from "./player";
import dice from "./dice";

type PlayerInput = {
  color: string;
  name?: string;
};

type Game = {
  players: Player[];
  gameBoard: BoardPosition[];
};

function create(playerInputs: PlayerInput[]) {
  const players = playerInputs.map((input) =>
    player.create(input.color, input.name)
  );

  const gameBoard = board.create();

  return {
    players,
    gameBoard,
  };
}

function movePlayer(game: Game, player: Player) {
  const diceValue = dice.roll();

  const currentIndex = player.currentIndex;
  const nextIndex = player.currentIndex + diceValue;
  const nextPosition = game.gameBoard[nextIndex];

  // init rule
  if (currentIndex == -1) {
    if (diceValue == 6) {
      player.currentIndex = nextIndex;
      return;
    }
    return;
  }

  // safezone rules
  if (nextPosition.safezone) {
    player.currentIndex = nextIndex;
    return;
  }

  if (nextPosition.players.length > 0) {
    // killing the only player standing on the next position
    const playerOnNextPosition = nextPosition.players[0];
    playerOnNextPosition.currentIndex = -1;
    return;
  }

  player.currentIndex = nextIndex;
}

export default Object.freeze({
  create,
});

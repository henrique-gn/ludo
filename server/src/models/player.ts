import { startPoints } from "./constants";

export type Player = {
  color: string;
  name: string;
  spawnIndex: number;
  currentIndex: number;
};

function create(color: string, name: string = color): Player {
  return {
    color,
    name,
    spawnIndex: startPoints[color],
    currentIndex: -1,
  };
}

export default Object.freeze({
  create,
});

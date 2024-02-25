// TODO: implement actual LUDO logic
function roll(luck: number = 1) {
  const rolls = [];

  for (let i = 0; i < luck; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }

  return rolls.sort((a, b) => b - a).pop();
}

export default Object.freeze({
  roll,
});

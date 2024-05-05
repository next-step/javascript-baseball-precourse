export function calculateStrikes(input, target) {
  let strikes = 0;
  for (let i = 0; i < 3; i++) {
    if (input[i] === target[i]) {
      strikes++;
    }
  }
  return strikes;
}

export function calculateBalls(input, target) {
  let balls = 0;
  for (let i = 0; i < 3; i++) {
    if (input[i] !== target[i] && target.includes(input[i])) {
      balls++;
    }
  }
  return balls;
}

export default function comparestrike(me, com) {
  let strike = 0;
  for (var i = 0; i < 3; i++) {
    if (me[i] === com[i]) {
      strike++;
    }
  }
  return { strike };
}

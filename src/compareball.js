export default function compareball(me, com) {
  let ball = 0;
  for (var i = 0; i < 3; i++) {
    if (me[i] != com[i]) {
      for (var j = 0; j < 3; j++) {
        if (me[i] === com[j]) {
          ball++;
          break;
        }
      }
    }
  }
  return { ball };
}

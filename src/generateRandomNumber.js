export default function generateRandomNumber() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * numbers.length);
      result.push(numbers[index]);
      numbers.splice(index, 1);
    }
    return result.join("");
}

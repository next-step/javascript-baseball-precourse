import checkError from "./checkError";
import playGame from "./playGame";

export default function inputNum() {
    const confirmButton = document.getElementById('confirmButton');

    function handleConfirmClick() {
        const userInput = document.getElementById('user-input').value;
        if (!userInput) return; 

        const isValid = checkError(userInput);
        if (!isValid) {
            return; 
        }
        playGame(userInput);
    }

    confirmButton.addEventListener('click', handleConfirmClick);
}

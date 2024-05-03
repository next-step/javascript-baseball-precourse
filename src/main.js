import { randomNumberGenerate } from "./randomGenerator.js";
import { handleUserInput } from "./handleUserInput.js";
import { restartGame } from "./restartGame.js";
import { showQuitMessage } from "./quitGame.js";

randomNumberGenerate();
document.querySelector("form").addEventListener("submit", handleUserInput);
document.getElementById("restartButton").addEventListener("click", restartGame);
document.getElementById("quitButton").addEventListener("click", showQuitMessage);
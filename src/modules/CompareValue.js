import { ShowResult } from "./ShowResult.js";
import { answer } from "./SetAnswer.js";

export const CompareValue = () => {
    const inputEl = document.querySelector("input");

    let strikes = 0;
    let balls = 0;
    for (let i = 0; i < 3; i++) {
        if (inputEl.value[i] === answer[i]) {
            strikes++;
        } else if (answer.includes(inputEl.value[i])) {
            balls++;
        }
    }

    ShowResult(strikes, balls);
};

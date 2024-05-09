import { CompareValue } from "./CompareValue.js";

export const HandleInput = (e) => {
    e.preventDefault();
    const inputEl = document.querySelector("input");
    const contents = document.getElementById("contents");

    if (inputEl.value.length < 3) {
        alert("3글자 이상 입력해주세요.");
        return;
    }

    contents.setAttribute("class", "");

    CompareValue();
};

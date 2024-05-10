// components/InputController.js

export function disableInput() {
    const inputField = document.getElementById('num');
    const submitButton = document.getElementById('submit');

    inputField.disabled = true;
    submitButton.disabled = true;
}

export function enableInput() {
    const inputField = document.getElementById('num');
    const submitButton = document.getElementById('submit');

    inputField.disabled = false;
    submitButton.disabled = false;
}

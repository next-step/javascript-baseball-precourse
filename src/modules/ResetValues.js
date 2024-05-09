export const ResetValues = () => {
    const inputEl = document.querySelector("input");
    const ansEl = document.getElementById("ansEl");
    inputEl.value = "";
    ansEl.innerText = "";

    location.reload();
};

let computerNumber = [];

const generateComputerNumber = () => {
    computerNumber = [];
    while (computerNumber.length < 3) {
        const number = Math.floor(Math.random() * 9) + 1;
        if (!computerNumber.includes(number)) {
            computerNumber.push(number);
        }
    }
};

const getComputerNumber = () => computerNumber;

const resetComputerNumber = () => {
    computerNumber = [];
};

export default { generateComputerNumber, getComputerNumber, resetComputerNumber };

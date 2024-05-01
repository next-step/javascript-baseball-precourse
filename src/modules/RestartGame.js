import { RandomNumber } from './RandomNumber';

export const RestartMsg = () => {
	const restartMessage = document.getElementById('restartGame');
	restartMessage.style.display = 'block';
};

export const RestartBtn = () => {
	const btn = document.getElementById('restartBtn');
	btn.style.display = 'block';
};

export const RestartGame = () => {
	RandomNumber();
	document.getElementById('submit-input').value = '';
	document.getElementById('gameResult').textContent = '';
	document.getElementById('restartBtn').style.display = 'none';
	document.getElementById('restartGame').style.display = 'none';
	document.getElementById('endBtn').style.display = 'none';
};

export const EndGameBtn = () => {
	const endGame = document.getElementById('endBtn');
	endGame.style.display = 'block';
};

export const EndGame = () => {
	const app = document.getElementById('app');
	app.innerHTML = '<h1>게임이 종료되었습니다.</h1>';
};

import BaseballGameController from './controllers/BaseballGameController';

const $app = document.querySelector('#app');

new BaseballGameController({ $target: $app });

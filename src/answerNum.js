export let numLst;
export let answer;

// 3개의 숫자 랜덤으로 생성
export function answerNumber() {
    numLst = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    answer = [];
    for (let i = 0; i < 3; i++) {
        let select = Math.floor(Math.random() * numLst.length);
        answer[i] = numLst.splice(select, 1)[0];
    }
}

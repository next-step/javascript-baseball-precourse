export let answer = [];

// 중복 없이 랜덤한 숫자 3개를 생성하는 함수
export const randomNumberGenerate = () => {
  const nums = [1,2,3,4,5,6,7,8,9];
  answer.length = 0;

  for (let i = 0; i < 3; i += 1) {
    const idx = Math.floor(Math.random() * nums.length);
    answer.push(nums[idx]);
    nums.splice(idx, 1);
  }
};
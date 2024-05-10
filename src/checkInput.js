//잘못된 시도인지 검사 
import { removeDuplicates } from "./removeDuplicates.js";
import { $input } from './main.js';
import { tries } from "./main.js";
import { removeZero } from "./removeZero.js";

export function checkInput(input) {
  if (input.includes('0')){
    $input.value=removeZero(input);
    return alert('1~9사이 숫자를 입력하세요');
  }
  if (input.length > 3) { 
    let temp;
    temp=input.slice(0,3);
    $input.value=removeDuplicates(temp);
    
    return alert('중복되지 않게 3자리 숫자를 입력해 주세요.');
  }
  if (input.length !== 3) {
    $input.value=removeDuplicates(input);
    return alert('중복되지 않게 3자리 숫자를 입력해 주세요.');
  }
  if (new Set(input).size !== 3) { 
    $input.value=removeDuplicates(input); 
    
    return alert('중복되지 않게 3자리 숫자를 입력해주세요');
  }
  if (tries.includes(input)) { 
    $input.value='';
    return alert('이미 시도한 값입니다');
  }
  
  return true;
}
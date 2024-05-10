//결과값 출력
import { $logs } from "./main.js";

export function displayLogText(text) { // 매개변수로 전달된 값을 출력한다 
  $logs.textContent = text; 
}
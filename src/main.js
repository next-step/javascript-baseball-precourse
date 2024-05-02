import { limitInputLength } from "./limitInputLength";
import { getUserInput } from "./playBaseball";
import { preventRefresh } from "./preventRefresh";

// 클라이언트 입력 제한
limitInputLength();
preventRefresh();

// 클라이언트 수 입력받기
getUserInput();

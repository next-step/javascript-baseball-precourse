import { clickNumberConfirm, clickRestart } from './clickEventListener';
import { limitInputLength, preventRefresh } from "./controlUserInput";

// 클라이언트 입력 제한
limitInputLength();
preventRefresh();

// 버튼 클릭 이벤트 트리거
clickNumberConfirm();
clickRestart();
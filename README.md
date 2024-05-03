# javascript-baseball-precourse



vite설치 권한오류 해결 참고링크
https://velog.io/@duck-ach/Mac-OS-root-%EC%82%AC%EC%9A%A9%EC%9E%90-su-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0


#변수
- 임의의 정답값: value
- 사용자가 입력한 값 : num

#문제풀이과정
1. value 랜덤 설정.(중복되면 안됨)
2. num 저장.
2. num = value 라면, result : display.
3. value != num 이라면 alert()


#고민
1. value값을 하나의 변수에 100단위의 숫자로 하는 것 vs 3개의 변수로 나누어서 사용하는 것 => 변수 3개로 만드는게 나을 것 같다. 왜냐하면 각각의 숫자를 사용하는 일이 너무 많을 것 이다. 

2. 배열 메서드 include는 인자가 배열인 경우만 작동한다. 

ball check. 

숫자가 있는지. 
있으면 
자릿수 비교.



# 경우의 수
1. 다 맞았을 경우. strike==3
2. 다 틀렸을 경우. strike==0, ball = 0



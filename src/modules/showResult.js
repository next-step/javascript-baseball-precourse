function showResult(resultArr) {
    if(resultArr[0]==0 && resultArr[1]==0){
        return "낫싱";
    } 
    else if(resultArr[1] == 0) {
        return (resultArr[0] + "스트라이크");
    } else {
        return (resultArr[1] + "볼 " + resultArr[0] + "스트라이크");
    }

}

export { showResult };
// 함수(function)
// 하나의 로직을 재실행 할 수 있도록 하는 것으로 코드의 재사용성을 높여준다.

// 함수의 형식
function 함수명([인자,,,,[,인자]]){
    코드
    return 반환값
}

// 함수 예시
function numbering(){
    i = 0;
    while(i < 10){
        document.write(i);
        i += 1;
    }
}

// 함수를 호출할 때
// 그냥 numbering이라고 호출한다면 함수가 아닌 변수를 호출한다고 인식한다.
numbering();

// 다양한 정의 방법
numbering = function (){
    i = 0;
    while(i<10){
        document.write(i);
        i += 1;
    }
}

function numbering(){
    i = 0;
    while(i<10){
        document.write(i);
        i += 1;
    }
}

// 익명함수
// 이름이 없고 바로 실행하는 경우(중요도 낮음)
(function numbering(){
    i = 0;
    while(i<10){
        document.write(i);
        i += 1;
    }
})();
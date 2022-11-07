// function으로 감싸주면 MYAPP은 전역변수가 아닌 함수의 지역변수가 된다.
// 함수를 정의하고 그것을 바로 호출하는 다음과 같은 기법을 익명함수라고 한다.

(function(){
    var MYAPP = {}
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }

    MYAPP.calculator.left = 10;
    MYAPP.coordinate.right = 20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.coordinate.right;
    }
    document.write(sum());
}())
// 매개변수(parameter)
function get_argument(arg){
            // ()안의 arg가 매개변수이다.
    return arg*1000;
}

alert(get_argument(1));
alert(get_argument(2));
// arg로 전달한 get_argument()안의 입력값을 인자(argument)라 한다.

// 복수의 인자
function get_argument(arg1, arg2){
    // ()안의 arg가 매개변수이다.
return arg1 + arg2;
}

alert(get_argument(10, 20));
alert(get_argument(20, 30));
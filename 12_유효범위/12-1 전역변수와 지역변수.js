// 유효범위(Scope)
// 변수의 수명을 의미
// fscope라는 함수는 안에 선언되어 있지 않은 바깥쪽의 vscope에 접근 가능하다.
var vscope = 'global';
function fscope(){
    // var vscope = 'local'
    alert(vscope);
}
fscope();

// 지역변수(local variables)와 전역변수(global variables)
// 지역변수 : 함수 안에서 사용(그 함수에 소속되어 있는 지역변수가 된다.)
// 전역 변수 : 함수 밖에서 실행가능
var vscope = 'global';
function fscope(){
    var vscope = 'local'
    var lv = 'local variables';     // 지역변수, 그 지역에서만 접근가능
    alert(lv);
}
fscope();
alert(lv);  //undefined
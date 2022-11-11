// this가 함수안에서 전역객체를 의미하는 window를 의미한다.
function func(){
    if(window === this){
        document.write("window === this")
    }
}
func();     // window === this

// 메소드 호출시 this의 값
// 다음 예시를 통해 객체에 소속된 메소드를 호출하면 메소드가 소속되어 있는 객체를 this로 접근할 수 있다는 것을 알 수 있다.
var o = {
    func : function(){
        if(o === this){
            document.write("o === this")
        }
    }
}
o.func();       // o === this
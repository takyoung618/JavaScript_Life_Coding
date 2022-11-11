// this가 함수안에서 전역객체를 의미하는 window를 의미한다.
function func(){
    if(window === this){
        document.write("window === this")
    }
}
func();     // window === this
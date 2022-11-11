// 생성자 안에서 this는 어떤 의미를 갖는가?
var funcThis = null;

function Func(){
    funcThis = this;
}

// 일반함수로 호출 
var o1 = Func();
if(funcThis === window){
    document.write('window </br>')
}

// new를 사용하여 생성자로 호출
var o2 = new Func();
if(functhis === o2){
    document.write('o2 <br/>')
}
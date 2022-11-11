// 상속이란?
// 상속은 객체의 로직을 그대로 물려 받는 또 다른 객체를 만들 수 있는 기능을 의미한다.
// 단순히 똑같이 물려받기? => 의미 x

// 자바스크립트에서 상속은 어떻게 구현하는가?
function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name;
}

// Programmer가 introduce를 상속하기 때문에 My name is egoing이라는 값이 출력된다.
function Programmer(name){
    this.name = name;
}
// 어떠한 객체를 상속받고 싶다면 그 객체를 생성자의 prototype에 할당시키면 된다.
Programmer.prototype = new Person();

var p1 = new Programmer('egoing');
document.write(p1.introduce()+"<br/>")      // My name is egoing



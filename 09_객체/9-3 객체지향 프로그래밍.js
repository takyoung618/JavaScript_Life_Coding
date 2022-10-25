// 객체에 안에는 함수가 저장될 수 있다. 
var grades = {
    'list' : {'egoing': 10, 'k8806': 8, 'sorialgi': 80},
    'show' : function(){
        alert('Hello World');
    }
}
alert(grades['show']());

// this
// grades란 함수가 속해있는 객체를 가리키는 변수
var grades = {
    'list' : {'egoing': 10, 'k8806': 8, 'sorialgi': 80},
    'show' : function(){
        alert(this.list);   // {'egoing': 10, 'k8806': 8, 'sorialgi': 80}
    }
}
grades.show();

// 객체지향 프로그래밍
// 위에서 list라는 데이터와 show라는 함수를 grades라는 함수 안에 묶어두었다.
// list와 show는 서로가 관련성을 가진 것들끼리 묶어질 수 있다.
// 즉 연관성을 가진 데이터와 어떠한 처리를 하나의 그릇안에 묶어 그룹화한 프로그래밍 기법이다.
// 이러한 것을 객체지향 프로그래밍이라고 한다.
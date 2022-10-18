// 조건문
// 주어진 조건에 따라서 애플리케이션을 다르게 동작하게 하는 것이다.

// 조건문의 문법 
// if(반드시 true나 false가 안에 들어감)

// true라면 result가 실행됨
if(true){
    alert('result : true')
}
// 값이 false인 이 조건문은 result가 실행되지 않음
if(false){
    alert('result : true')
}
// alert 1~5까지 실행됨
if(true){
    alert(1)
    alert(2)
    alert(3)
    alert(4)   
}
alert(5)
// alert 5만 실행됨
if(false){
    alert(1)
    alert(2)
    alert(3)
    alert(4)   
}
alert(5)
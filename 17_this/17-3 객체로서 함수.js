// this는 함수 내에서 함수 호출 맥락(context)을 의미한다. 
// 맥락이라는 것은 상황에 따라서 달라진다는 의미인데, 즉 함수를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라진다는 뜻이다.
// 함수와 객체의 관계가 느슨한 자바스크립트에서 this는 이 둘을 연결시켜주는 실질적인 연결점의 역할을 한다.

// 함수호출 
// 함수호출시 this는 무엇을 가리킬까?
function func(){
    if(window === this){
        console.log("window === this")
    }
}

func();     // window === this
// 변수(Variable)란 값을 담은 컨테이너로 값을 유지할 필요가 있을 때 사용한다.
// 여기에 담겨진 값은 다른 값으로 바꿀 수 있기 때문에 '변하는 것이 가능한' 이라는 의미로 변수라고 사용한다.

// 처음 변수를 사용할 때는 let을 붙여주고, 
// 그 다음부터 사용할 때에는 이미 우리가 변수를 만들었기 때문에 그 다음부터는 let을 사용하지 않아도 된다. 
let first = 'coding';
alert(first + ' everybody'); // coding everybody
first = '코딩' // "코딩"
alert(first + ' everybody'); // 코딩 everybody

// let을 계속 쓰기가 귀찮다면?
let a = 'coding', b = 'everybody';
alert(a+b) // codingeverybody

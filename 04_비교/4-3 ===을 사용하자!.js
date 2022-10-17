// null : 값이 없다.
// undefined: 값이 정의되어 있지 않다.
let a;          // undefined
alert(a);       // undefined
let b = null;   // undefined
alert(b);       // null
alert(undefined == null);  // true
alert(undefined === null); // false

// true와 false라는 것은 데이터의 형식(ex. string, number) 두 가지를 묶으면 Boolean이라고 한다.
// ==보단 ===을 꼭 쓰자
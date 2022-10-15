// 다음은 유효하다.
alert('egoing"s coding everybody');

// 다음은 유효하지 않다.
// alert('egoing's coding everybody');

// 그렇다면 역슬래시를 추가하면 유효해진다.
alert('egoing\'s coding everybody');

// 숫자 1과 "1"은 서로 다른 데이터 형식이다.
// "1" 은 문자가 된다.
typeof 1   // "number"
typeof "1" // "string"

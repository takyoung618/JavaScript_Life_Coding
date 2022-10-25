// 객체와 반복문의 조우
var arr = ['a', 'b', 'c'];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// 배열은 저장된 데이터들의 순서가 있다. 
// 객체는 순서가 없다. key와 value가 있다. 순서가 없기에 저장된 값이 순서에따라 나오지 않을 것이다.

// 배열에 있는 값을 가져올 때에는 for in 문을 사용한다.
let grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
for(let name in grades) {
    document.write("<li>key: "+name+" value: "+grades[name]+"</li>")
}
//  key: egoing value: 10
//  key: k8805 value: 6
//  key: sorialgi value: 80
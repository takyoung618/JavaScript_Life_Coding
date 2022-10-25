// 제일 앞에 있는 데이터의 제거
let a = ['a', 'b', 'c', 'd', 'e'];
a.shift(); // 'a' 
alert(a);  // ['b', 'c', 'd', 'e']

// 제일 뒤에 있는 데이터의 제거
let b = ['a', 'b', 'c', 'd', 'e'];
b.pop();   // 'e'
alert(b);  // ['a', 'b', 'c', 'd']

// 정렬
let c = ['c', 'e', 'a', 'b', 'd'];
c.sort();       // ['a'. 'b'. 'c, 'd', 'e']
c               // ['a'. 'b'. 'c, 'd', 'e']
c.reverse();    // ['e', 'd', 'c', 'b', 'a']

// array.sort(sortfunc)
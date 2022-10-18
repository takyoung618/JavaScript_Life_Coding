// else
// 만약 참이라면 1이 실행되고 "그렇지 않다면" 무시된다.
if(true){
    alert(1)
} else {
    alert(2);
}
// 만약 거짓이라면 1이 실행되지 않고(if 구간이 실행되지 않고) 그렇지 않다면(즉 true라면) 2가 실행된다. 
if(false){
    alert(1)
} else {
    alert(2);
}

// else if
// 앞쪽의 if가 실행되지 않을 때 = else, 어떠한 조건일 때 = if
// 즉, 앞쪽의 if가 실행되지 않으면서 어떠한 조건을 가질 때.
// 2가 실행된다.
if(false){
    alert(1)
} else if(true){
    alert(2)
} else if(true){
    alert(3)
} else {
    alert(4)
}

// 3이 실행된다.
if(false){
    alert(1)
} else if(false){
    alert(2)
} else if(true){
    alert(3)
} else {
    alert(4)
}


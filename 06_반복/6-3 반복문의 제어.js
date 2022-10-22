// break
// 현재 반복문을 중단시키고 바깥으로 빠져나가라!
// 반복작업을 중간에 중단시키고 싶다면? break를 사용하면 된다.
for(let i =0; i<10; i++){
    if(i === 5){
        break;
    }
    document.write("Coding everybody "+i+"<br />");
} // 이를 실행하면 i=4까지만 출력된다.

// continue
// 5에서 continue를 만나면 중지되고, 다시 반복문이 시작된다.
for(let i =0; i<10; i++){
    if(i === 5){
        break;
    }
    document.write("Coding everybody "+i+"<br />");
} // 이를 실행하면 i=5인 경우만 제외하고 출력된다.     

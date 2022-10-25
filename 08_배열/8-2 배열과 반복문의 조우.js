// 배열의 진가는 반복문과 결합했을 때 나타난다.
function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}

members = get_members();

document.write(members[0].toUpperCase());   //EGOING

alert(members.length);  //3

// 배열과 반복문의 결합
for(let i = 0; i < members.length; i++){
    document.write(members[i].toUpperCase()+'<br/>'); 
}
// EGOING
// K8805
// SORIALGI

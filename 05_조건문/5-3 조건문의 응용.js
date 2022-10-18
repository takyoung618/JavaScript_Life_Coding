// prompt
// 어떠한 값을 사용자로부터 받을 수 있는 기능
// 사용자가 입력한 기능이 실행됨
prompt('당신의 나이는?');

// 조건문 안의 조건문
// 아이디가 일치한다면 비밀번호를 검증하자
let id = prompt('아이디를 입력해주세요.')
if(id == 'egoing'){
    let password = prompt('비밀번호를 입력해주세요.')
    if(password == '111111'){
        alert('로그인 하셨습니다.')
    } else {
        alert('비밀번호가 다릅니다.')
    }
    alert('아이디가 일치합니다.')
} else {
    alert('아이디가 일치하지 않습니다.')
}
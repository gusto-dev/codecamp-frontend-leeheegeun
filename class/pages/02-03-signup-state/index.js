import { useState } from 'react';

export default function SignupStatePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleClickSignup() {
    console.log(email, password);

    if (email.includes('@') === false) {
      // alert('이메일 형식이 아닙니다.');
      // document.getElementById('error').innerText = '이메일 형식이 아닙니다.';
      setEmailError('이메일 형식이 아닙니다.');
      return;
    } else {
      // 메시지 알림전, Backend 서버의 API 요청하기
      alert('회원가입 성공');
    }
  }

  return (
    <>
      <div>
        이메일: <input type="text" value={email} onChange={handleChangeEmail} />
        <div>{emailError}</div>
      </div>
      <div>
        비밀번호:{' '}
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <button onClick={handleClickSignup}>회원가입</button>
    </>
  );
}

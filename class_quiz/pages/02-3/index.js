import { useState } from 'react';

export default function CreateNumberPage() {
  const [number, setNumber] = useState('000000');

  function handleClickCreateNumber() {
    const random = Math.floor(Math.random() * 1000000);
    setNumber(random);
  }

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleClickCreateNumber}>인증번호 전송</button>
    </div>
  );
}

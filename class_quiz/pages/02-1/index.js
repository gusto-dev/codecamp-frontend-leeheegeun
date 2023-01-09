import { useState } from 'react';

export default function ChangeTextPage() {
  const [text, setText] = useState('안녕하세요');

  function handleClickChageText() {
    setText('반갑습니다');
  }

  return (
    <div>
      <button onClick={handleClickChageText}>{text}</button>
    </div>
  );
}

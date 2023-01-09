import { useState } from 'react';
import axios from 'axios';

export default function RestapiGetPage() {
  const handleClickSubmit = async () => {
    const result = await axios.get('https://koreanjson.com/users');
    console.log(result.data);
  };

  return (
    <div>
      <p>sdfds</p>
      <button onClick={handleClickSubmit}>요청하기</button>
    </div>
  );
}

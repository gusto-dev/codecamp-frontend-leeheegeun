import { useState } from 'react';
import axios from 'axios';

export default function RestGetPage() {
  const [title, setTitle] = useState('');

  const handleClickAsync = () => {
    const result = axios.get('https://koreanjson.com/posts/1');
    console.log(result);
    console.log(result.data);
  };

  const handleClickSync = async () => {
    const result = await axios.get('https://koreanjson.com/posts/1');
    console.log(result);
    console.log(result.data);
    setTitle(result.data.title);
  };

  return (
    <div>
      <button onClick={handleClickAsync}>REST-API 요청하기(비동기)</button>
      <button onClick={handleClickSync}>REST-API 요청하기(동기)</button>
      <p>{title}</p>
    </div>
  );
}

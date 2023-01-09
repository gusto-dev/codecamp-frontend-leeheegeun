import { useState } from 'react';

export default function ChangeCounterPage() {
  const [count, setCount] = useState(0);

  function handleClickCountIncrease() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClickCountIncrease}>카운트 증가</button>
    </div>
  );
}

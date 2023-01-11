import { useState } from 'react';

// 백엔드에서 받아온 데이터라고 가정 (컴포넌트 위에 만든 이유: 컴포넌트가 리렌더링이 되어도 다시 안만들어짐)
const FRUITS = [
  {
    number: 1,
    title: '레드향',
  },
  {
    number: 2,
    title: '샤인머스켓',
  },
  {
    number: 3,
    title: '한라봉',
  },
  {
    number: 4,
    title: '산청딸기',
  },
];

export default function MapFruitsPage() {
  const [fruits, setFruits] = useState(FRUITS);

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.number}>{fruit.title}</li>
        ))}
      </ul>
    </div>
  );
}

const CLASSMATES = [
  { name: '철수', age: 10, school: '토끼초등학교' },
  { name: '영희', age: 10, school: '다람쥐초등학교' },
  { name: '훈이', age: 10, school: '토끼초등학교' },
];

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

export default function Bonus() {
  const mates = CLASSMATES.filter((el) => el.school === '토끼초등학교');
  const mates2 = mates.map((el) => (!el.candy ? { ...el, candy: 10 } : el));
  const mates3 = CLASSMATES.filter((el) => el.school === '다람쥐초등학교');
  const mates4 = mates3.map((el) => el.name + '어린이');
  console.log(CLASSMATES, mates2, mates4);

  const fruits = FRUITS.filter((el) => el.number % 2 === 0);

  return (
    <div>
      {fruits.map((el) => (
        <div key={el.number}>{el.title}</div>
      ))}
    </div>
  );
}

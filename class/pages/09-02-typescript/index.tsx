export default function Qqq() {
  // 타입추론
  let a = 10;
  // a = 'hello';

  // 타입명시
  let b: string = 'hello';
  b = 'hello2';

  // 문자타입(선언과 할당 분리)
  let c: string;
  c = 'hello3';

  // 숫자타입
  let d: number = 10;
  d = 20;

  // 불린타입
  let e: boolean = true;
  e = false;
  // e = 'false'; // true로 작동

  // 배열타입
  let f: number[] = [1, 2, 3];
  f.push(4);
  let g: string[] = ['a', 'b', 'c'];
  let h: (string | number)[] = ['a', 1]; // 타입을 추론해서 어떤 타입을 사용하는지 알아보기

  // 객체타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
  }
  const profile: IProfile = {
    name: '철수',
    age: 20,
    school: '다람쥐초등학교',
  };
  profile.age = '20살';

  // 함수타입 : 어디서든 몇번이든 호출 가능하므로, 시작부터 타입추론 할 수 없음 (반드시 타입명시 필요)
  const add = (number1: number, number2: number, unit: string): string => {
    return number1 + number2 + unit;
  };
  const result = add(500, 1000, '원'); // 결과의 리턴 타입도 예측 가능

  // any타입 : 타입추론이 불가능한 경우 사용
  let qqq: any = 'hello';
  qqq = 10;
  qqq = true;

  return (
    <div>
      <h1>Qqq</h1>
    </div>
  );
}

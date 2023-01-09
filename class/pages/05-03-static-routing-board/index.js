import { useRouter } from 'next/router';

export default function StaticRoutingPage() {
  const router = useRouter();

  const handleClickMove1 = () => {
    router.push('/05-04-static-routed-board/1');
  };
  const handleClickMove2 = () => {
    router.push('/05-04-static-routed-board/2');
  };
  const handleClickMove3 = () => {
    router.push('/05-04-static-routed-board/3');
  };

  return (
    <ul>
      <li>
        <button onClick={handleClickMove1}>1번 게시글 이동하기</button>
      </li>
      <li>
        <button onClick={handleClickMove2}>2번 게시글 이동하기</button>
      </li>
      <li>
        <button onClick={handleClickMove3}>3번 게시글 이동하기</button>
      </li>
    </ul>
  );
}

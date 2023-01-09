import { useRouter } from 'next/router';

export default function StaticRoutingPage() {
  const router = useRouter();

  const handleClickMove = () => {
    router.push('/05-02-static-routed');
  };

  return (
    <div>
      <button onClick={handleClickMove}>페이지 이동하기</button>
    </div>
  );
}

import { gql, useQuery } from '@apollo/client';

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: 12005 },
  });

  console.log(data);

  return (
    <div>
      <p>1번 게시글로 이동이 완료되었습니다. </p>
      <div>작성자 : {data ? data.fetchBoard.writer : '로딩중입니다.'}</div>
      <div>제목 : {data && data.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div>
    </div>
  );
}

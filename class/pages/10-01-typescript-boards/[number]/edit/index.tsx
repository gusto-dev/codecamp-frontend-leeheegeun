import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import BoardWrite from '../../../../src/components/units/board/10-write/BoardWrite.container';

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationPage() {
  // 자바스크립트 영역
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  // UI 영역
  return (
    <>
      {/* <BoardWrite isEdit={true} data={data} /> */}
      {BoardWrite({ isEdit: true, data: data })}
    </>
  );
}

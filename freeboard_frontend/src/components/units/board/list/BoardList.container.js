import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { FETCH_BOARDS } from './BoardList.queries';
import BoardListUI from './BoardList.presenter';

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickMoveToBoardNew = () => {
    router.push('/boards/new');
  };

  const onClickMoveToBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}

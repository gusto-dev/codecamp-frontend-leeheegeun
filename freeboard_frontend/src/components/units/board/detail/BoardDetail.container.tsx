import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  IQuery,
  IQueryFetchBoardArgs,
} from '../../../../commons/types/generated/types';
import BoardDetailUI from './BoardDetail.presenter';
import { FETCH_BOARD } from './BoardDetail.queries';

export default function BoardDetail() {
  const router = useRouter();
  // if (typeof router.query.boardId !== 'string') {
  //   alert('올바르지 않은 게시글 아이디입니다.');
  //   void router.push('/');
  //   return <></>;
  // }

  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.boardId) } }
  );

  const onClickMoveToBoardList = () => {
    void router.push('/boards');
  };

  const onClickMoveToBoardEdit = () => {
    if (typeof router.query.boardId !== 'string') {
      alert('올바르지 않은 게시글 아이디입니다.');
      return;
    }

    void router.push(`/boards/${router.query.boardId}/edit`);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
    />
  );
}

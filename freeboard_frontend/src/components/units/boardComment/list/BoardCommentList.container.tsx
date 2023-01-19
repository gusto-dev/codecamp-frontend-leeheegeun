import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from '../../../../commons/types/generated/types';
import BoardCommentListUI from './BoardCommentList.presenter';
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from './BoardCommentList.queries';

export default function BoardCommentList() {
  const router = useRouter();
  // if (typeof router.query.boardId !== 'string') {
  //   alert('올바르지 않은 게시글 아이디입니다.');
  //   void router.push('/');
  //   return <></>;
  // }

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, 'deleteBoardComment'>,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const { data } = useQuery<
    Pick<IQuery, 'fetchBoardComments'>,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
    const myPassword = prompt('비밀번호를 입력하세요.');
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    alert(`${event.currentTarget.id}님이 작성한 글입니다.`);
  };

  return (
    <BoardCommentListUI
      data={data}
      onClickDelete={onClickDelete}
      onClickAlert={onClickAlert}
    />
  );
}

import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';

export default function BoardWrite(props) {
  const router = useRouter();
  const [myColor, setMyColor] = useState(false);

  // 자바스크립트 영역
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const handleClickSubmit = async () => {
    const result = await createBoard({
      // variables는 $ 역할을 해줌
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    alert(result.data.createBoard.message);
    router.push(`/08-05-boards/${result.data.createBoard.number}`);
  };

  const handleClickUpdate = async () => {
    // 1. 수정하기 뮤테이션 날리기
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    alert(result.data.updateBoard.message);

    // 2. 상세페이지로 이동하기
    router.push(`/08-05-boards/${result.data.updateBoard.number}`);
  };

  const handleChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) {
      setMyColor(true);
    }
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setMyColor(true);
    }
  };

  const handleChangeContents = (event) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setMyColor(true);
    }
  };

  // UI 영역
  return (
    <BoardWriteUI
      handleClickSubmit={handleClickSubmit}
      handleClickUpdate={handleClickUpdate}
      handleChangeWriter={handleChangeWriter}
      handleChangeTitle={handleChangeTitle}
      handleChangeContents={handleChangeContents}
      myColor={myColor}
      isEdit={props.isEdit}
    />
  );
}

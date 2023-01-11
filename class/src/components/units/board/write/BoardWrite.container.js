import { useState } from 'react';
import { useMutation } from '@apollo/client';

import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD } from './BoardWrite.queries';

export default function BoardWrite() {
  // 자바스크립트 영역
  const [createBoard] = useMutation(CREATE_BOARD);
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
    alert(result);
  };

  const handleChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeContents = (event) => {
    setContents(event.target.value);
  };

  // UI 영역
  return (
    <BoardWriteUI
      handleClickSubmit={handleClickSubmit}
      handleChangeWriter={handleChangeWriter}
      handleChangeTitle={handleChangeTitle}
      handleChangeContents={handleChangeContents}
    />
  );
}

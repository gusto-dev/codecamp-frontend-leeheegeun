import { useState } from 'react';
import { useMutation } from '@apollo/client';

import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD } from './BoardWrite.queries';

export default function BoardWrite() {
  const [myColor, setMyColor] = useState(false);

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
      handleChangeWriter={handleChangeWriter}
      handleChangeTitle={handleChangeTitle}
      handleChangeContents={handleChangeContents}
      myColor={myColor}
    />
  );
}

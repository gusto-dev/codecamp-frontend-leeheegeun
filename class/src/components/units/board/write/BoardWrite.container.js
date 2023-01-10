import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

import BoardWriteUI from './BoardWrite.presenter';

const CREATE_BOARD = gql`
  # 변수의 타입 적는곳
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # 실제 전달할 변수 적는곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

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
    console.log(result);
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
      aaa={handleClickSubmit}
      bbb={handleChangeWriter}
      ccc={handleChangeTitle}
      ddd={handleChangeContents}
    />
  );
}

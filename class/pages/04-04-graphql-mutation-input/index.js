import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

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

export default function GraphqlMutationPage() {
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

  return (
    <div>
      <div>
        <input type="text" placeholder="작성자" onChange={handleChangeWriter} />
      </div>
      <div>
        <input type="text" placeholder="제목" onChange={handleChangeTitle} />
      </div>
      <div>
        <input type="text" placeholder="내용" onChange={handleChangeContents} />
      </div>
      <button onClick={handleClickSubmit}>등록</button>
    </div>
  );
}

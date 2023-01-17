import { ChangeEvent, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import {
  IMutation,
  IMutationCreateBoardArgs,
} from '../../src/commons/types/generated/types';

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
  const [writer, setWriter] = useState<string>('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [createBoard] = useMutation<
    Pick<IMutation, 'createBoard'>,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const handleClickSubmit = async () => {
    const result = await createBoard({
      // variables는 $ 역할을 해줌
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    alert(result.data?.createBoard?.message);
  };

  const handleChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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

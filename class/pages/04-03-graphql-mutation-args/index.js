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
  const [message, setMessage] = useState('');

  const handleClickSubmit = async () => {
    const result = await createBoard({
      // variables는 $ 역할을 해줌
      variables: {
        writer: '미미3',
        title: '안녕하세요~',
        contents: '반갑습니다.  내용 내용 내용내용내용내용',
      },
    });
    console.log(result);
    setMessage(result.data.createBoard.message);
  };

  return (
    <div>
      <button onClick={handleClickSubmit}>GRAPHQL-API 요청하기(동기)</button>
      <p>{message}</p>
    </div>
  );
}

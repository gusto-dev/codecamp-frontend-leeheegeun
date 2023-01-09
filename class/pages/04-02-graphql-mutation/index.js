import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_BOARD = gql`
  mutation {
    createBoard(
      writer: "미미2"
      title: "제목입니다2,"
      contents: "내용이용 미미2"
    ) {
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
    const result = await createBoard();
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

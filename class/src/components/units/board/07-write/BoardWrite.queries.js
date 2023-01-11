import { gql } from '@apollo/client';

export const CREATE_BOARD = gql`
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

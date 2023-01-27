import { gql, useQuery, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int!) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const Row = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
`;

const Column = styled.div`
  width: 25%;
  text-align: center;
`;

export default function StaticRoutedPage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const handleClickDelete = async (event) => {
    await deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
    alert("삭제");
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <Row key={el.number}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{el.number}</Column>
          <Column>{el.title}</Column>
          <Column>{el.contents}</Column>
          <Column>
            <button id={el.number} onClick={handleClickDelete}>
              삭제
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}

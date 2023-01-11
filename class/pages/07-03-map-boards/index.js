import { gql, useQuery } from '@apollo/client';
import styled from '@emotion/styled';

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
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <Row key={el.number}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{el.number}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{el.contents}</Column>
        </Row>
      ))}
    </div>
  );
}

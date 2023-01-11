import { gql, useQuery, useMutation } from '@apollo/client';
import styled from '@emotion/styled';

const FETCH_PRODUCTS = gql`
  query fetchProducts {
    fetchProducts {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID!) {
    deleteProduct(productId: $productId) {
      _id
      number
      message
    }
  }
`;

const Row = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
`;

export default function StaticRoutedPage() {
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const { data } = useQuery(FETCH_PRODUCTS);

  console.log(data?.fetchProducts);

  const handleClickDelete = async (event) => {
    await deleteProduct({
      variables: { productId: event.target.id },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
  };

  return (
    <div>
      {data?.fetchProducts.map((el) => (
        <Row key={el._id}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{el.seller}</Column>
          <Column>{el.name}</Column>
          <Column>{el.detail}</Column>
          <Column>{el.price}</Column>
          <Column>{el.createdAt}</Column>
          <Column>
            <button id={el._id} onClick={handleClickDelete}>
              삭제
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}

import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import ProductWrite from '../../../../src/components/units/product_edit/write/ProductWrite.container';

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
    }
  }
`;

export default function ProductEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.number },
  });

  return <ProductWrite isEdit={true} data={data} />;
}

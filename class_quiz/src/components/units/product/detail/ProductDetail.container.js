import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import { FETCH_PRODUCT } from './ProductDetail.queries';
import ProductDetailUI from './ProductDetail.presenter';

export default function ProductDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.id },
  });

  return <ProductDetailUI data={data} />;
}

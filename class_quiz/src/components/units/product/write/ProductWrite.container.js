import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import { CREATE_PRODUCT } from './ProductWrite.queries';
import ProductWriteUI from './ProductWrite.presenter';

export default function ProductWrite() {
  const router = useRouter();

  const [seller, setSeller] = useState('');
  const [productName, setProductName] = useState('');
  const [productdetail, setProductDetail] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const [createProduct] = useMutation(CREATE_PRODUCT);

  const handleChangeSeller = (event) => {
    setSeller(event.target.value);
  };

  const handleChangeProductName = (event) => {
    setProductName(event.target.value);
  };

  const handleChangeProductDetail = (event) => {
    setProductDetail(event.target.value);
  };

  const handleChangeProductPrice = (event) => {
    setProductPrice(event.target.value);
  };

  const handleClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller: seller,
          createProductInput: {
            name: productName,
            detail: productdetail,
            price: Number(productPrice),
          },
        },
      });
      alert(result.data.createProduct.message);
      router.push(`/06/products/${result.data.createProduct._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ProductWriteUI
      handleChangeSeller={handleChangeSeller}
      handleChangeProductName={handleChangeProductName}
      handleChangeProductDetail={handleChangeProductDetail}
      handleChangeProductPrice={handleChangeProductPrice}
      handleClickSubmit={handleClickSubmit}
    />
  );
}

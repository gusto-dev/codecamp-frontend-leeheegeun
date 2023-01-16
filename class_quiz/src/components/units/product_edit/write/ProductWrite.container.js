import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';

import ProductWriteUI from './ProductWrite.presenter';
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './ProductWrite.queries';

export default function ProductWrite(props) {
  const router = useRouter();

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  const [seller, setSeller] = useState('');
  const [productName, setProductName] = useState('');
  const [productdetail, setProductDetail] = useState('');
  const [productPrice, setProductPrice] = useState('');

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
      router.push(`/08/${result.data.createProduct._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClickUpdate = async () => {
    // 1. 수정하기 뮤테이션 날리기
    const result = await updateProduct({
      variables: {
        productId: router.query.number,
        seller: seller,
        updateProductInput: {
          name: productName,
          detail: productdetail,
          price: Number(productPrice),
        },
      },
    });
    alert(result.data.updateProduct.message);

    // 2. 상세페이지로 이동하기
    router.push(`/08/${result.data.updateProduct._id}`);
  };

  return (
    <ProductWriteUI
      handleChangeSeller={handleChangeSeller}
      handleChangeProductName={handleChangeProductName}
      handleChangeProductDetail={handleChangeProductDetail}
      handleChangeProductPrice={handleChangeProductPrice}
      handleClickSubmit={handleClickSubmit}
      handleClickUpdate={handleClickUpdate}
      isEdit={props.isEdit}
    />
  );
}

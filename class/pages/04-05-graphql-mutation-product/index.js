import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_PRODUCT = gql`
  # 변수의 타입 적는곳
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    # 실제 전달할 변수 적는곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const handleClickSubmit = async () => {
    const result = await createProduct({
      // variables는 $ 역할을 해줌
      variables: {
        seller: '메롱이',
        createProductInput: {
          name: '메롱이의 상품이름',
          detail: '메롱이의 상품상세',
          price: 1000,
        },
      },
    });
    console.log(result.data.createProduct.message);
  };

  return (
    <div>
      <button onClick={handleClickSubmit}>등록</button>
    </div>
  );
}

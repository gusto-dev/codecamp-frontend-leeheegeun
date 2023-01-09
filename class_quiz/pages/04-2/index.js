import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [seller, setSeller] = useState('');
  const [productName, setProductName] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: productName,
          detail: productDetail,
          price: productPrice,
        },
      },
    });
    console.log(result);
  };

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
    setProductPrice(Number(event.target.value));
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="판매자" onChange={handleChangeSeller} />
      </div>
      <div>
        <input
          type="text"
          placeholder="상품이름"
          onChange={handleChangeProductName}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="상품상세"
          onChange={handleChangeProductDetail}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="상품가격"
          onChange={handleChangeProductPrice}
        />
      </div>
      <button onClick={handleClickSubmit}>GRAPHQL-API 요청하기(동기)</button>
    </div>
  );
}

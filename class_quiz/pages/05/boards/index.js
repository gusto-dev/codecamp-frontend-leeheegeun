import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

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

export default function BoardsPage() {
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
      router.push(`/05/boards/${result.data.createProduct._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>
        판매자: <input type="text" onChange={handleChangeSeller} />
      </div>
      <div>
        상품명: <input type="text" onChange={handleChangeProductName} />
      </div>
      <div>
        상품내용: <input type="text" onChange={handleChangeProductDetail} />
      </div>
      <div>
        상품가격: <input type="text" onChange={handleChangeProductPrice} />
      </div>
      <div>
        <button onClick={handleClickSubmit}>상품등록</button>
      </div>
    </div>
  );
}

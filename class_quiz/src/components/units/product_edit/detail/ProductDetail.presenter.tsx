interface IProductDetailUIProps {
  data?: any;
  handleClickMoveToEdit: () => void;
}
export default function ProductDetailUI(props: IProductDetailUIProps) {
  return (
    <div>
      <div>판매자: {props.data?.fetchProduct.seller}</div>
      <div>상품명: {props.data?.fetchProduct.name}</div>
      <div>상품내용: {props.data?.fetchProduct.detail}</div>
      <div>상품가격: {props.data?.fetchProduct.price}</div>
      <div>
        <button onClick={props.handleClickMoveToEdit}>수정하기</button>
      </div>
    </div>
  );
}

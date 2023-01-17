export default function ProductWriteUI(props) {
  return (
    <div>
      <div>상품 {props.isEdit ? '수정' : '등록'} 페이지</div>
      <div>
        상품명:{' '}
        <input
          type="text"
          onChange={props.handleChangeProductName}
          defaultValue={props.data?.fetchProduct.name}
        />
      </div>
      <div>
        상품설명:{' '}
        <input
          type="text"
          onChange={props.handleChangeProductDetail}
          defaultValue={props.data?.fetchProduct.detail}
        />
      </div>
      <div>
        상품가격:{' '}
        <input
          type="number"
          onChange={props.handleChangeProductPrice}
          defaultValue={props.data?.fetchProduct.price}
        />
      </div>
      <div>
        판매자:{' '}
        <input
          type="text"
          onChange={props.handleChangeSeller}
          defaultValue={props.data?.fetchProduct.seller}
        />
      </div>
      <button
        onClick={
          props.isEdit ? props.handleClickUpdate : props.handleClickSubmit
        }
      >
        {props.isEdit ? '수정' : '등록'}
      </button>
    </div>
  );
}

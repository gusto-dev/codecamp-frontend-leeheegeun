export default function ProductWriteUI(props) {
  return (
    <div>
      <div>상품 {props.isEdit ? '수정' : '등록'} 페이지</div>
      <div>
        상품명: <input type="text" onChange={props.handleChangeProductName} />
      </div>
      <div>
        상품설명:{' '}
        <input type="text" onChange={props.handleChangeProductDetail} />
      </div>
      <div>
        상품가격:{' '}
        <input type="number" onChange={props.handleChangeProductPrice} />
      </div>
      <div>
        판매자: <input type="text" onChange={props.handleChangeSeller} />
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

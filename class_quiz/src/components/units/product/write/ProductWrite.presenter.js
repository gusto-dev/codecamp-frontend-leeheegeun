import { RedInput, Wrapper } from './ProductWrite.styles';

export default function ProductWriteUI(props) {
  return (
    <Wrapper>
      <div>
        판매자: <RedInput type="text" onChange={props.handleChangeSeller} />
      </div>
      <div>
        상품명:{' '}
        <RedInput type="text" onChange={props.handleChangeProductName} />
      </div>
      <div>
        상품내용:{' '}
        <RedInput type="text" onChange={props.handleChangeProductDetail} />
      </div>
      <div>
        상품가격:{' '}
        <RedInput type="text" onChange={props.handleChangeProductPrice} />
      </div>
      <div>
        <button onClick={props.handleClickSubmit}>상품등록</button>
      </div>
    </Wrapper>
  );
}

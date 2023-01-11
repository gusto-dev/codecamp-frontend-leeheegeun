import {
  Wrapper,
  RedInput,
  SubmitButton,
  WriteItem,
} from './BoardWrite.styles';

export default function BoardWriteUI(props) {
  // 자바스크립트 영역

  // UI 영역
  return (
    <Wrapper>
      <WriteItem>
        <RedInput
          type="text"
          placeholder="작성자"
          onChange={props.handleChangeWriter}
        />
      </WriteItem>
      <WriteItem>
        <RedInput
          type="text"
          placeholder="제목"
          onChange={props.handleChangeTitle}
        />
      </WriteItem>
      <WriteItem>
        <RedInput
          type="text"
          placeholder="내용"
          onChange={props.handleChangeContents}
        />
      </WriteItem>
      <SubmitButton
        qqq="테스트"
        aaa={props.myColor}
        onClick={props.handleClickSubmit}
      >
        등록
      </SubmitButton>
    </Wrapper>
  );
}

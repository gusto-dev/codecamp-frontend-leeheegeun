import {
  Wrapper,
  RedInput,
  SubmitButton,
  WriteItem,
} from './BoardWrite.styles';
import { IBoardWriteUIProps } from './BoardWrite.types';

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  // 자바스크립트 영역

  // UI 영역
  return (
    <Wrapper>
      <WriteItem>
        <RedInput
          type="text"
          placeholder="작성자"
          onChange={props.handleChangeWriter}
          defaultValue={props.data?.fetchBoard?.writer ?? ''}
        />
      </WriteItem>
      <WriteItem>
        <RedInput
          type="text"
          placeholder="제목"
          onChange={props.handleChangeTitle}
          defaultValue={props.data?.fetchBoard?.title ?? ''}
        />
      </WriteItem>
      <WriteItem>
        <RedInput
          type="text"
          placeholder="내용"
          onChange={props.handleChangeContents}
          defaultValue={props.data?.fetchBoard?.contents ?? ''}
        />
      </WriteItem>
      <SubmitButton
        qqq="테스트"
        aaa={props.myColor}
        onClick={
          props.isEdit ? props.handleClickUpdate : props.handleClickSubmit
        }
      >
        {props.isEdit ? '수정하기' : '등록하기'}
      </SubmitButton>
    </Wrapper>
  );
}

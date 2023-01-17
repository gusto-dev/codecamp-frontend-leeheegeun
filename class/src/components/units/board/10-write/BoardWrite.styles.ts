import styled from '@emotion/styled';
import { ISubmitButtonProps } from './BoardWrite.types';

export const Wrapper = styled.div`
  width: 100%;
`;

export const RedInput = styled.input`
  border: 1px solid red;
`;

export const SubmitButton = styled.button`
  color: ${(props: ISubmitButtonProps) =>
    props.qqq === '테스트' ? 'blue' : 'black'};
  background-color: ${(props: ISubmitButtonProps) =>
    props.aaa ? 'yellow' : 'red'};
  border: 1px solid blue;
`;

export const WriteItem = styled.div`
  width: 100%;
`;

import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
`;

export const RedInput = styled.input`
  border: 1px solid red;
`;

export const SubmitButton = styled.button`
  color: ${(props) => (props.qqq === '테스트' ? 'blue' : 'black')};
  background-color: ${(props) => (props.aaa ? 'yellow' : 'red')};
  border: 1px solid blue;
`;

export const WriteItem = styled.div`
  width: 100%;
`;

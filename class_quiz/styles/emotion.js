import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  background-color: #fff;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  padding: 32px 48px;
  display: flex;
  justify-content: flex-end;
`;
export const SearchButton = styled.button`
  width: 32px;
  height: 32px;
  background: url('/ic_search.svg') no-repeat center center;
  border: 0;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  padding: 0 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
`;
export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0 20px;
  & > a {
    display: block;
    padding-right: 30px;
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    color: #000;
    background: url('/ic_arrow_right.svg') no-repeat right center;
  }
`;

export const TabWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 0 48px;
  display: flex;
  align-items: center;
  gap: 0 25px;
  & > a {
    display: block;
    font-size: 24px;
    font-weight: 700;
    color: #cacaca;
    text-decoration: none;
    &.active {
      color: #ff1b6d;
      text-decoration: underline;
    }
  }
`;

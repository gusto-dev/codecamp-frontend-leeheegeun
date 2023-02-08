import { useState } from 'react';
import styled from '@emotion/styled';

const MyStar = styled.div`
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props: { active: boolean }) =>
    props.active ? '/star_active.png' : '/star.png'});
  cursor: pointer;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 0 14px;
`;

const StarPoint = [1, 2, 3, 4, 5];

export default function App() {
  const [value, setValue] = useState(0);

  const onClickStar = (num: any) => {
    setValue(num);
  };

  return (
    <>
      <Box>
        {StarPoint.map((num) => (
          <MyStar
            key={num}
            active={num <= value}
            onClick={() => onClickStar(num)}
          />
        ))}
      </Box>
      <p>{value}점</p>
    </>
  );
}

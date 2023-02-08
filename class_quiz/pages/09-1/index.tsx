import { useState } from 'react';
import styled from '@emotion/styled';
import { Rate } from 'antd';

const MyStar = styled(Rate)`
  font-size: 50px;
  color: red;
`;

export default function LibraryStarPage() {
  const [value, setValue] = useState(0);

  const onChangeValue = (value: number) => {
    alert(`${value}점`);
    setValue(value);
  };

  return (
    <>
      <MyStar onChange={onChangeValue} value={value} />
      <p>{value}점</p>
    </>
  );
}

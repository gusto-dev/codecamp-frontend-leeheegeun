import styled from "@emotion/styled";
import { Rate } from "antd";
import { useState } from "react";

const MyStar = styled(Rate)`
  font-size: 50px;
  color: red;
`;

export default function LibraryStarPage() {
  const [value, setValue] = useState(0);

  return (
    <>
      <MyStar onChange={setValue} value={value} />
      <p>{value}</p>
    </>
  );
}

import styled from "@emotion/styled";
import { PlayCircleOutlined } from "@ant-design/icons";

const MyIcon = styled(PlayCircleOutlined)`
  font-size: 50px;
  color: red;
`;

export default function LibraryIconPage() {
  return <MyIcon />;
}

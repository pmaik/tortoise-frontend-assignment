import { Button } from "grommet";
import styled from "styled-components";

const CustomStatusButton = styled(Button)`
  border: 1px solid #eeeeee;
  border-radius: 6px;
  &:hover {
    background-color: transparent;
    box-shadow: none;
  }
`;

export { CustomStatusButton };

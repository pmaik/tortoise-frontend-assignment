import { Button } from "grommet";
import styled from "styled-components";

const StyledButton = styled(Button)`
  &:hover {
    background-color: transparent;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.17);
  }
`;

const CustomStatusButton = styled(Button)`
  border: 1px solid #eeeeee;
  border-radius: 6px;
  &:hover {
    background-color: transparent;
    box-shadow: none;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.17);
  }
`;

const getNavListStyles = (isActive) => ({
  textDecoration: "none",
  color: isActive ? "#3f3636" : "GrayText",
  fontWeight: "bold",
  background: isActive ? "#EFEBEB" : "#FAFAFA",
  padding: "10px",
  borderRadius: "8px",
});

const getClaimDetailsNavListStyles = (isActive) => ({
  textDecoration: "none",
  color: isActive ? "#191919" : "#757575",
  fontSize: "16px",
  fontWeight: "500",
  padding: "10px",
  borderRadius: "8px",
  background: isActive ? "#fff" : "none",
  boxShadow: isActive ? "0px 4px 4px 0px rgba(0, 0, 0, 0.17)" : "none",
});

export {
  StyledButton,
  CustomStatusButton,
  getNavListStyles,
  getClaimDetailsNavListStyles,
};

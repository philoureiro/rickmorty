import styled from "styled-components";
import { ArrowLeftSquare, ArrowRightSquare } from "react-bootstrap-icons";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NumberLabel = styled.text`
  color: white;
  font-size: 24px;
`;

export const IconContainer = styled.div`
  height: auto;
  width: auto;
`;

export const LeftIcon = styled(ArrowLeftSquare).attrs(() => ({
  size: 24,
  color: "white",
}))`
  :hover {
    transform: scale(1.1);
  }
`;

export const RightIcon = styled(ArrowRightSquare).attrs(() => ({
  size: 24,
  color: "white",
}))`
  :hover {
    transform: scale(1.1);
  }
`;

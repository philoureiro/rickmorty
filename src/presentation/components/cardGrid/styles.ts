import styled from "styled-components";
import { Grid } from "@chakra-ui/react";
export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
interface GridProps {
  gap?: number;
  templateColumns?: string;
  repeat?: number;
}
export const GridComponent = styled(Grid).attrs(
  ({ repeat }): GridProps => ({
    gap: 3,
    templateColumns: `repeat(${repeat}, 1fr)`,
  })
)`
  width: 100%;
  height: 95%;
  padding: 30px;
`;

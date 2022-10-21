import styled from "styled-components";
import { Input } from "@chakra-ui/react";
export const Container = styled.div`
  width: 95%;
  height: fit-content;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputComponent = styled(Input).attrs(() => ({
  type: "text",
  placeholder: "Procure um personagem",
  backgroundColor: "white",
  borderRadius: "20xp",
}))`
  background-color: white;
  border-radius: 20px;
`;

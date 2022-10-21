import { InputComponent, Container } from "./styles";
import { Search } from "react-bootstrap-icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface ISearchBarProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ handleChange }: ISearchBarProps) {
  return (
    <Container>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Search color="black.300" />}
        />
        <InputComponent
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
      </InputGroup>
    </Container>
  );
}

export default SearchBar;
